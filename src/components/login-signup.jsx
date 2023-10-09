import React from "react";
import Nav from "./nav";
function Login(){
    var [sup,HandelChange]=React.useState({
        username:"",
        email:"",
        pass:""
    })
    function SignUp(event){
        fetch('http://localhost:4500/',{
            method:'POST',
            body:JSON.stringify(sup),
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(sup);
        event.preventDefault();
    }
    function Sform(event){
        var name=event.target.name;
        var value=event.target.value;
        if(name==='txt'){
            HandelChange((pvalue)=>{
                return{
                    ...pvalue,
                    username:value
                }
            })
            
        }
        
        else if(name==='email'){
            HandelChange((pvalue)=>{
                return{
                    ...pvalue,
                    email:value
                }
            })
        }
        else if(name==='pswd'){
            HandelChange((pvalue)=>{
                return{
                    ...pvalue,
                    pass:value
                }
            })
            
        }
        // console.log(sup);
    }
    return(
        <div>
            <Nav/>
            <div className="Login">
                        <div className="Login-picture">
                            <img src="./images/login.jpg" alt="" />
                        </div>
                        <div className="login-main">  	
                        <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form onSubmit={SignUp}>
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input onChange={Sform} type="text" name="txt" placeholder="User name" />
                            <input onChange={Sform} type="email" name="email" placeholder="Email" />
                            <input onChange={Sform} type="password" name="pswd" placeholder="Password" />
                            <button>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label for="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="pswd" placeholder="Password" />
                            <button>Login</button>
                        </form>
                    </div>
            </div>
    </div>
        </div>
    )
}
export default Login;