import React from "react";
function Technical() {
    window.addEventListener("scroll",S);
    var [fund,setFund]=React.useState(50);
    var [projects,setProjects]=React.useState(900);
    var [donations,setDonations]=React.useState(10000);
    var [volunteer,setVolunteer]=React.useState(6000);
    function S(){
        var height=window.innerHeight/5*4;
        var tech=document.querySelector(".tech");
        if(tech.getBoundingClientRect().top<height){
            tech.classList.add("leftform-after");
            var x=setInterval(fund,50);
            var y=setInterval(projects,30);
            var i=0,j=0,k=0,l=0;
            function fund(){
                // i++;
                // setFund(i);
                // if(i>49){
                //     clearInterval(x);
                // }
            }
            function projects(){
                // j+=50;
                // // k+=100;
                // // l+=80;
                // setProjects(j);
                // // setDonations(k);
                // // setVolunteer(l);
                // if(j>899){
                //     clearInterval(y);
                    
                // }
            }
        }

    }
    return(
        <section className="tech">
            <h4>Great Review for our success</h4>
            <h3>Technical Statistics</h3>
            <section id="divs">
                <div id="techButtons" style={{cursor:"pointer" ,transition:"1s"}}>
                    <div className="formIcon">
                        <img src="./images/money.png" alt="" />
                    </div>
                    <center><p>${fund} M</p><p>Fund Raised</p></center>
                </div>
                <div id="techButtons" style={{cursor:"pointer",transition:"1s"}}>
                    <div className="formIcon" >
                        <img src="./images/completed-task.png" alt="" />
                    </div>
                    <center><p>{projects}</p><p>Projects Completed</p></center>
                </div>
                <div id="techButtons" style={{cursor:"pointer",transition:"1s"}} ><div className="formIcon"  ><img src="./images/donation.png" alt="" /></div><center><p>{donations}</p><p>Donations</p></center></div>
                <div id="techButtons" style={{cursor:"pointer",transition:"1s"}}><div className="formIcon" ><img src="./images/network.png" alt="" /></div><center><p>{volunteer}</p><p>Volunteers</p></center></div>
            </section>
        </section>
    )
}
export default Technical;