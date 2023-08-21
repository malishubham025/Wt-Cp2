import React from "react";
function Form() {
    window.addEventListener("scroll",S);
    function S(){
        var h=window.innerHeight/5*4;
        var left=document.querySelector("#leftbutton");
        var formleft=document.querySelector("#formleft");
        var formright=document.querySelector("#formright");
        var formSection=document.querySelector("#formSection");
        if(left.getBoundingClientRect().top<h){
            
            left.classList.add("leftbutton-after");
        }
        if(formSection.getBoundingClientRect().top<h){
            formSection.classList.add("leftform-after");
        }
        if(formleft.getBoundingClientRect().top<h){
            formleft.classList.add("leftform-after");
            formright.classList.add("leftform-after");
            
        }
        else{
            // alert("hi");
            formleft.classList.remove("leftform-after");
        }
        
    }
    return(
        
        <section id="formSection">
            <div id="formleft">
                <h5>WELCOME TO HELPING HAND</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <div id="leftbutton">
                    <div className="formbuttons" id="formSectionButtons"><div className="formIcon"><img src="./images/donation.png" alt="" /></div>Start Donating</div>
                    <div className="formbuttons" id="formSectionButtons"><div className="formIcon"><img src="./images/network.png" alt="" /></div>Join Our Community</div>
                    <div className="formbuttons" id="formSectionButtons"><div className="formIcon"><img src="./images/volunteer.png" alt="" /></div>Be A Volunteer</div>
                </div>
            </div>
            <div id="formright">
                <form action="" method="post">
                    <h5>Donate Now</h5>
                    
                    <h4>Giving is the greatest act of grace</h4>
                    Your Full Name <br />
                    <input type="text" name="inputs" placeholder="Your Full Name"/><br />
                    Email Address <br />
                    <input type="email" name="inputs" placeholder="Email"/><br />
                    Amount to Give <br />
                    <input type="text" name="inputs" placeholder="Amount"/><br />
                    <input type="radio" name="payMethod" />Paypal
                    <input type="radio" name="payMethod" />Credit card
                    <input type="radio" name="payMethod" />Payoneer
                    <br />
                    <button>Donate Now</button>
                </form>
            </div>
        </section>
    )
}
export default Form;