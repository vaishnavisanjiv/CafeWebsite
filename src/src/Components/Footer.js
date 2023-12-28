import React from "react";
import im1 from './img/logo.png';
import im2 from './img/001-meta.png';
import im3 from './img/002-instagram.png';
import im4 from './img/003-twitter.png';
import { Link } from "react-router-dom";

function Footer(){
    return(
      <div className="footer">
        <img src={im1}></img>
          <div className="f1" style={{width:'80%'}}>
              <h3>Contact  Info</h3>
              <p>123 Main Street</p>
              <p>Pune, Maharashtra</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="f1" style={{listStyleType:'none',width:'50%'}}>
              <h3>Quick Links</h3>
          
                <li  >
                  <Link to='/'  style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>Home</Link>
                </li>
                <li >
                  <Link to='/Order' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>Menu</Link>
                </li>
                <li >
                  <Link to='/About' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>About</Link>
                </li>
                <li >
                  <Link to='/Store' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>Stores</Link>
                </li>
          
            </div>
            <div className="f1" id="f2" style={{width:'100%'}}>
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 9am - 7pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="f1" style={{width:'90%',marginLeft:'5%'}}>
              <h3 style={{marginLeft:'5%'}}>Follow Us</h3>
              <div>
               <a href=""><img src={im2}></img></a>
                
               <a href=""><img src={im3}></img></a>
                
               <a href=""><img src={im4}></img></a>
                
              </div>
            
            </div>
            
          <div className="copyright">
          <hr></hr>
            <h5>
              
            2023 Bella Italia Cafe.All Rights Reserved
            </h5>
            
          </div>
          
      </div>
  
    );
}

export default Footer;