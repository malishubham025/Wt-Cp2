import React from "react";
import Nav from "./nav";
// import { BrowserRouter as Router } from "react-router-dom";
function Login(){
    var [sup,HandelChange]=React.useState({
        username:"",
        email:"",
        pass:""
    })
    var [log,Handellog]=React.useState({
        email:"",
        password:""
    })
    function SignUp(event){
        fetch('http://localhost:4000/',{
            method:'POST',
            body:JSON.stringify(sup),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((data)=>{
            if(data.ok){
                alert("Success !");
                HandelChange({
                    username: "",
                    email: "",
                    pass: ""
                });

            }
            else if(data.status==409){
                alert("Email Exist");
            }
            
        }).catch((data)=>{
            console.log(data);
        })
        
        
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
        if(name==='email'){
            HandelChange((pvalue)=>{
                return{
                    ...pvalue,
                    email:value
                }
            })
        }
        if(name==='pswd'){
            HandelChange((pvalue)=>{
                return{
                    ...pvalue,
                    pass:value
                }
            })
            
        }
        console.log(sup);
    }
    function Login(event){
        var name=event.target.name;
        var value=event.target.value;
        if(name==="email"){
            Handellog((pvalue)=>{
                return{
                ...pvalue,
                email:value
                }
            })
        }
        if(name==="pswd"){
            Handellog((pvalue)=>{
                return{
                ...pvalue,
                password:value
                }
            })
        }

        // console.log(log);

    }
    function Log(event){
        fetch("http://localhost:4000/login",{
            method:"post",
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((data)=>{
            if(data.status===409){
                alert("Email or password is wrong");
            }
            else if(data.ok){
                
                Handellog({
                    email: "",
                    password: ""
                });
                alert("success !");
            }
            return data.json();
        }).then((data)=>{
            console.log(data);
                })
        event.preventDefault();
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
                            <input onChange={Sform} type="text" name="txt" placeholder="User name" value={sup.username}/>
                            <input onChange={Sform} type="email" name="email" placeholder="Email" value={sup.email} />
                            <input onChange={Sform} type="password" name="pswd" placeholder="Password" value={sup.pass} />
                            <button>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={Log} >
                            <label for="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" onChange={Login} value={log.email}/>
                            <input type="password" name="pswd" placeholder="Password" onChange={Login} value={log.password}/>
                            <button>Login</button>
                        </form>
                    </div>
            </div>
    </div>
        </div>
    )
}
export default Login;