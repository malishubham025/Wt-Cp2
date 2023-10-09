import React from "react";
import { useState,useEffect } from "react";
function Projects(){
    window.addEventListener("scroll",S);
    // var line=document.querySelector(".cards-line");
    // var height=0;
    var [project,HandelProjects]=React.useState([])
    function S(){
        var line = document.querySelector(".about-cards-line");
        var h=window.innerHeight/5*4;
        var boxes=document.querySelectorAll(".dis");
       
        boxes.forEach((box)=>{
            if(box.getBoundingClientRect().top<h){
                line.style.height="1416px"
                box.classList.add("about-show-element");
            }

        })
        var boxes1=document.querySelectorAll(".dis1");
        boxes1.forEach((box)=>{
            if(box.getBoundingClientRect().top<h){
                box.classList.add("about-show-element1");
            }


        });
    


        

    
        // var height = (boxes.length - 1) * 300 + 300; // Calculate the height based on the number of cards
        // line.style.height = height + "px";
        
    //    line.getBoundingClientRect().height+300;
        // console.log(height);
        // line.style.height=height;
    }
    React.useEffect(()=>{
        fetch('http://localhost:4500/',{
            method:'GET',
        }).then((responce)=>{
            console.log("Effect is running...");
            if (!responce.ok) {
                throw new Error('Network response was not ok');
            }
            return responce.json();
        }).then((data)=>{
            HandelProjects(data);
            console.log(project);
            // console.log("hello");
            // console.log(data);
            // console.log(data[0].info);
            // HandelProjects((pvalue)=>{
            //     return{
            //         ...pvalue,
            //         info
            //     }
            // })
            // data.map((info)=>{
                // console.log(info);
            //     HandelProjects(info);
            // })
            // console.log(project);
        })
        
    },[])
    return(
        <div>
            <h1 id="projects">Projects</h1>
            <div id="about">
                <div className="about-left">
                    <div>
                     <div className="about-card1 dis">
                          <div className="about-img-project">

                          </div>
                          <div className="about-about-project">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                          </div>
                     </div>
                     <div className="about-card2 dis">
                     <div className="about-img-project">

                    </div>
                    <div className="about-about-project">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                    </div>
                    </div>
                    <div className="about-card3 dis">
                    <div className="about-img-project">

                    </div>
                    <div className="about-about-project">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                    </div>                        
                    </div>
                    </div>
                    <div className="about-cards-line">

                    </div>
                </div>
                <div id="right">
                <div className="about-card4 dis1">
                <div className="about-right-img-project">

                </div>
                <div className="about-right-about-project">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                </div>  
                </div>
                <div className="about-card5 dis1">
                <div className="about-right-img-project">

                </div>
                <div className="about-right-about-project">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                </div> 
                </div>
                <div className="about-card6 dis1">
                <div className="about-right-img-project">

                </div>
                <div className="about-right-about-project">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat et ea ducimus aliquid architecto, cumque laboriosam officia illo? Perferendis nulla quasi nam totam quia error quae voluptatibus eos, rem atque!</p>
                </div> 
                </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;