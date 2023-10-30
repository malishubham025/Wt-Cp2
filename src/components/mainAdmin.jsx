import React from "react";
import "./admin.css"
import Volunteers_one from "./Volunteers";
import Organizations from "./Organizations";
function AdminPage(){
    var [showPages,handelshowPages]=React.useState({
        volunteer:false,
        org:false,
        orders:false,
        website:false
    })
    // const navigate = useNavigate(); 
    function Volunteers(name){
      
        // navigate("/volunteers");
        console.log(name);
        var pages={
            volunteer:false,
            org:false,
            orders:false,
            website:false
        };
        pages[name]=true;
        handelshowPages(pages);

    }

    return (
        <div>
           <div className="flex">
                <div className="w-72  py-6 px-3 Admin-left text-white">
                    <div className="w-20 cursor-pointer">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="mt-6">
                        <div className="rounded-md w-52 logos">
                        {/* <img src="./images/volunteer.png" alt="" /> */}
                        <p className="p-3 cursor-pointer" onClick={()=>{Volunteers("volunteer")}} >Volunteers</p>
                        </div>
                        <div className="rounded-md w-52 logos">
                        <p className="p-3 mt-8 cursor-pointer" onClick={()=>{Volunteers("org")}}>Organizations</p>
                        </div>
                        <div className="rounded-md w-52 logos">
                        <p className="p-3 mt-8 cursor-pointer" onClick={()=>{Volunteers("orders")}} >Orders</p>
                        </div>
                        <div className="rounded-md w-52 logos " >
                        <p className="p-3 mt-8 cursor-pointer flex-col" onClick={()=>{Volunteers("website")}}>Website</p>
                        </div>
                        <div className="rounded-md w-52 logos">
                        <p className="p-3 mt-8 cursor-pointer">Logout</p>
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div style={{width:"90%"}}>
                    {showPages.volunteer?<Volunteers_one/>:null}
                    {showPages.org?<Organizations/>:null}
                    
                </div>
                
           </div>
        </div>
    )
};
export default AdminPage;