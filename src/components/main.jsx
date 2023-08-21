import React from "react";

function Main() {
  setTimeout(() => {
    document.querySelector(".main-content").style.opacity = "1";
    document.querySelector(".main-sharing").style.opacity = "1";
    document.querySelector(".main-food").style.opacity = "1";
  }, 300);
  setTimeout(() => {
    document.querySelector(".main-company-info").style.opacity = "1";
  }, 400);
  setTimeout(() => {
    document.querySelector(".main-more").style.opacity = "1";
    document.querySelector(".main-image").classList.add("main-visible");
  }, 500);

  const yellowShades = ["#99A98F","#FFD95A","#F97B22","#A1CCD1","#7A9D54"];
  // "#FFFF00", "#FFED55", "#FFDB4D", "#FFC940", "#FFBF00","#F1C93B","#FAE392","#FFD95A",
  const [color, setColor] = React.useState("white");
  var colorInterval;

  function addColor() {
    // clearInterval(colorInterval); // Clear previous interval if it exists
    colorInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * yellowShades.length);
      setColor(yellowShades[randomIndex]);
      console.log("hello");
    }, 3000);

  }

  function removeColor() {
    setColor("white");
    clearInterval(colorInterval);
   
  }

  return (
    <div className="main-Main">
      <div className="main-content" onMouseOver={addColor} onMouseOut={removeColor}>
        <h1
          className="main-sharing"
          style={{ color: color }}
          
          
          
        >
          WE ARE SHARING
        </h1>
        <h1
          className="main-food"
          style={{ color: color }}
        //   onMouseOver={addColor}
        //   onMouseLeave={removeColor}
        >
          FOOD
        </h1>
        <p className="main-company-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          placeat!
        </p>
        <button className="main-more">Learn More</button>
      </div>
      <div className="main-image">
        <img src="./images/img.jpg" alt="" />
      </div>
    </div>
  );
}

export default Main;
