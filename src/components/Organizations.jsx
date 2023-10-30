import React from "react";
function Organizations(){
var [result,setResult]=React.useState([]);
React.useEffect(()=>{
    
    fetch("http://localhost:4000/organizations")
    .then((res)=>{
        if(!res.ok){
            throw new Error('Network response was not ok');
        }
        return res.json();
    }).then((data)=>{
        setResult(data);
    })
},[]);
return(
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Delivery Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Gmail
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            {result.map((res)=>{
                if(res._id%2!=0){
                    return(
                        <tr class="bg-gray-900 border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                            {res._id}
                        </th>
                        <td class="px-6 py-4">
                            {res.name}
                        </td>
                        <td class="px-6 py-4">
                            {res.delivery_date}
                        </td>
                        <td class="px-6 py-4">
                        {res.Contact}
                        </td>
                        <td class="px-6 py-4">
                        {res.gmail}
                        </td>
                        <td class="px-6 py-4">
                        {res.price}
                        </td>
                    </tr>
                    )

                }
                else{
                    return(
                        <tr class="border-b bg-gray-800 border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                            {res._id}
                        </th>
                        <td class="px-6 py-4">
                            {res.name}
                        </td>
                        <td class="px-6 py-4">
                            {res.delivery_date}
                        </td>
                        <td class="px-6 py-4">
                        {res.Contact}
                        </td>
                        <td class="px-6 py-4">
                        {res.gmail}
                        </td>
                        <td class="px-6 py-4">
                        {res.price}
                        </td>
                    </tr>
                    )     
                }
            })}


            
        </tbody>
    </table>
</div>

)
}
export default Organizations;