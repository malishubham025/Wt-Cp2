import React, { useState, useEffect } from "react";

function Nav() {
  const [position, changeposition] = useState(0);
  const [opac, changeopac] = useState(0);

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: footerPosition,
        behavior: "smooth",
      });
    }
  };

  const handledot = (event) => {
    document.querySelector(".dot").style.opacity = 1;

    const name = event.target.name;
    if (name === "one") {
      changeposition(30);
      changeopac(1);
    }
    if (name === "two") {
      changeposition(125);
      changeopac(1);
    }
    if (name === "three") {
      changeposition(240);
      changeopac(1);
    }
  };

  const opacChange = () => {
    changeposition(0);
    changeopac(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", opacChange);
    return () => {
      window.removeEventListener("scroll", opacChange);
    };
  }, []);

  return (
    <div className="main-nav">
      <div className="logo">
        <div className="logo-img">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="name">
          <p>ShareFood.Com</p>
        </div>
      </div>
      <div className="options">
        <a onMouseOver={handledot} onMouseOut={opacChange} name="one" href="/">
          Home
        </a>
        <a
          onMouseOver={handledot}
          onMouseOut={opacChange}
          name="two"
          href="#"
          onClick={handleScrollToFooter}
        >
          Contact
        </a>
        <a onMouseOver={handledot} onMouseOut={opacChange} name="three" href="AboutUs">
          About us
        </a>
        <div className="line">
          <div className="dot" style={{ left: position, opacity: opac }}></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
