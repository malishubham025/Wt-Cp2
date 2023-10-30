import React from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

function AdminLogin(){
    const navigate = useNavigate(); 
    var [Value,changeValue]=React.useState({
        username:"",
        password:""
    })
    // const history = useHistory();
    function handelSubmit(event){
        // console.clear();
        
        fetch('http://localhost:4000/loginAdmin',{
            method:'POST',
            body:JSON.stringify(Value),
            headers:{
                'Content-Type':'application/json'
            }

        }).then((data)=>{
            if(data.ok){
                alert("found");
                navigate("/admin-page");
                // history.push("/admin-page");
            }
            else if(data.status===409){
                alert("password or username is not correct !");
            }
        })
        console.log("hello",Value);
        changeValue({
            username:"",
            password:""
        })
        event.preventDefault();
    }
    function handelChange(event){
        var name=event.target.name;
        var value=event.target.value;
        if(name==="username"){
            changeValue((pvalue)=>{
                return {
                    ...pvalue,
                    username:value
                }
            })
        }
        if(name==="password"){
            changeValue((pvalue)=>{
                return {
                    ...pvalue,
                    password:value
                }
            })
        }
        // console.log(Value);
    }
        return (
            <div className="admin-form">
               <form   onSubmit={handelSubmit}>
                <input className="admin-input" type="text" placeholder="Username" name="username"  onChange={handelChange} value={Value.username}/>
                <input className="admin-input" type="password" placeholder="Password" name="password"  onChange={handelChange} value={Value.password}/>
                <button className="admin-button" type="submit">Login</button>
               </form>
            </div>
        )
}
export default AdminLogin;