import React from "react";
function Form() {
    
    const loadscript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src =src
            script.onload =()=>{
                resolve(true)
            }
            script.onerror=()=>{
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async (event) => {
        event.preventDefault();
    
        const fullName = document.getElementById("mainFormName").value;
        const email = document.getElementById("mainFormEmail").value;
        const amount = parseFloat(document.getElementById("mainFormAmount").value);
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmailValid = emailPattern.test(email);
    
        if (isEmailValid && amount > 0) {
        } else {
          if (!isEmailValid) {
            alert("Please enter a valid email address.");
          }
          if (amount <= 0) {
            alert("Please enter an amount greater than 0.");
          }
        }

        const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Your are offline...can't connect!!")
            return
        }

        const options = {
            key:"rzp_test_E5QBapRgbsBuqJ",
            currency:"INR",
            amount: amount*100,
            name:"ShareFood.com",
            description: "Thanks for Donating!!!",
            image: "./images/logo.png",

            handler: function (response){
                console.log(response.razorpay_payment_id)
                alert("Payment Successfull")
            },
            prefill:{
                name:fullName,
                email: email
            },
            theme: {
                color: "#3399cc"
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

    }
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
                <form method="post" onSubmit={(event) => displayRazorpay(event)}>
                    <h5>Donate Now</h5>
                    
                    <h4>Giving is the greatest act of grace</h4>
                    Your Full Name <br />
                    <input type="text" name="inputs" placeholder="Your Full Name"/><br />
                    Email Address <br />
                    <input type="email" name="inputs" placeholder="Email"/><br />
                    Amount to Give <br />
                    <input type="text" name="inputs" placeholder="Amount"/><br />
                    <br />
                    <button type="submit">Donate Now</button>
                </form>
            </div>
        </section>
    )
}
export default Form;
