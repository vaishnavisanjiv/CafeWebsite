import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Header2 from './Header2'
import Header3 from './Header3'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Order from './Order'
import Axios from 'axios';

function Formm() {
  

  
  
  const [[name, setName], [email, setEmail], [contact, setContact],[status,setStatus]] = [
    useState('Byul'), useState("vaishchomu "), useState("0987823749"),useState("")];

  function getData(e) {
    let data1 = name;
    let data2 = email;
    let data3 = contact;
    e.preventDefault();

   // mongo post
   let info = JSON.stringify({
    name:data1,
    email:data2,
    contact:data3
  });
   const ops = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data:info ,
    url:"/putData"
    };
   Axios(ops)
   .then((res)=>{
    if(res.status==200){
      toast("Success!",{position: toast.POSITION.BOTTOM_CENTER})
    }
   })
  }

  return (
    <div className='formcon'>

      <Header />
      <Header3/>
      <div className='formbg'>
        <h3>Welcome To Bella Italia</h3>
        <form onSubmit={getData}>
          <h2>Register</h2>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => setName(e.target.value)}
          required/>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" placeholder="Email.." onChange={(e) => setEmail(e.target.value)
            }
          required/>
          <label htmlFor="contact">Contact</label>
          <input type='number' id="fname" name="firstname" maxLength="10" placeholder="contact.." onChange={(e) => setContact(e.target.value)}
            required/>

          <input type="submit" defaultValue="Submit" id='sub' />
          <ToastContainer />
        </form>
      </div>
     

      <Footer />
    </div>
  )
}

export default Formm;