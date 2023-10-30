import React from "react";
function Nav(){
    var [position,changeposition]=React.useState(0);
    var [opac,changeopac]=React.useState(0);
    function handledot(event){
        document.querySelector(".dot").style.opacity=1;
        
        var name=event.target.name;
        if(name==="one"){
            changeposition(30);
            changeopac(1);
        }
        if(name==="two"){
            changeposition(125);
            changeopac(1);
        }
        if(name==="three"){
            changeposition(240);
            changeopac(1);
        }


    }
    function opacChange(){
        changeposition(0);
        changeopac(0);
    }
    return(
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
                <a onMouseOver={handledot} onMouseOut={opacChange} name="one" href="/">Home</a>               
                <a onMouseOver={handledot} onMouseOut={opacChange} name="two" href="#footer">Contact</a>
                <a onMouseOver={handledot} onMouseOut={opacChange} name="three">About us</a>
                <div className="line">
                     <div className="dot" style={{left:position,opacity:opac}}>

                     </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;