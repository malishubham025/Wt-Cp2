import React from "react";
import "./admin.css";
function Volunteers(){
    var [volunteer,setvolunteer]=React.useState([])
    React.useEffect(()=>{fetch("http://localhost:4000/volunteers").then((res)=>{
        if(!res.ok){
            throw new Error('Network response was not ok');
        }
        return res.json();
    }).then((res)=>{
        console.log(res);
        setvolunteer(res);
        
    })},[]);
        
    
    return(
        
        
<div class="relative overflow-x-auto p-1 ">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs  bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
            </tr>
        </thead>
        <tbody>

            {volunteer.map((data)=>{
                return(
                <tr class="bg-gray-800 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    {data._id}
                </th>
                <td class="px-6 py-4">
                    {data.name}
                </td>
                <td class="px-6 py-4">
                    {data.age}
                </td>
                <td class="px-6 py-4">
                    {data.mobile}
                </td>
                <td class="px-6 py-4">
                    {data.gmail}
                </td>
                </tr> 
                )
            })}
            {/* <tr class="bg-gray-800 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr> */}
           
        </tbody>
    </table>
</div>


    )
};
export default Volunteers;