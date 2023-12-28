import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table'

function Services() {
    const [data,setUser]=useState([]);

    const columns=[{Header:'pId',accessor:'pid'},{Header:'Name',accessor:'name'}]

   useEffect(()=>{
    //fetch("https://jsonplaceholder.typicode.com/users/1")
    fetch("http://localhost:8001/getOrder")
    .then((result)=>result.json())
    .then((data)=>setUser(data));
        },[] 
   )
   
// async function getData(){
//   let result= await fetch("https://jsonplaceholder.typicode.com/users/1")

//   result=await result.json();
//   setData(data);
// }
  return (
    <center>
    {data.map((dataObj, index) => {
      return (
        <div
          style={{
            width: "15em",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name},{dataObj.gender},{dataObj.age}</p>
        </div>
      );
    })}
   {/* <ReactTable data={data} columns={columns}></ReactTable> */}


    
  </center>
//     <div>
//         <h1>user services</h1>
//         </div>
//         <table className='tab'>
//             <tr>
//                 <th>id</th>
//                 <th>name</th>
//                 <th>body</th>
//             </tr>
// <tbody>
//         {
//             data.map((item)=>


//             )
//         }
//         </tbody>
//         </table>
  )
}

export default Services;