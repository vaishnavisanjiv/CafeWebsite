import Header from './Header';
import React, { useState } from 'react';
import icon1 from './img/3.png';
import icon2 from './img/aboutusimg.png';
import Footer from './Footer';
import Header2 from './Header2';

function About() {
  return (
    <div>
      <Header />
      <Header2 />
      <div className="conimg">
        <img src={icon1}></img>
        <br />
        <br />
        <span className="hsty">Coffee & Craft</span>
        <p>Coffee is at our heart, inspiring our craft and driving innovation-in our<br /> drinks, our food, our stores and new ways we bring the experience <br />  to you wherever you are.</p>
        <div className="line">
        </div>
        <br />
        <div className="style1">
          <span className="word">BEVERAGES & FOOD</span>
          <span className="word">CUSTOMER EXPERIENCE</span>
          <span className="word">INNOVATION</span>
        </div>
        <br />
      </div>
      <div className="About">
        <img src={icon2}></img>
        <h3>About Us</h3>
        <p>Welcome to <b>Bella Italia</b> , <br />where passion for coffee and a love for exceptional culinary experiences come together.<br /> We are more than just a café - we are a destination where flavors, creativity, and <br />community intertwine to create a truly memorable atmosphere.</p>
      </div>
      <div className="read">
        <button>Read More</button>
      </div>
      <div className='img2'>
      </div>
      
        <div className="About">
          <img src={icon2}></img>
          <h3>Our Story</h3>
          <center>
          <p><b>Bella Italia</b> was founded with a vision to provide a haven for coffee enthusiasts and food lovers alike.<br/>Inspired by our deep appreciation for the art of coffee brewing and the joy it brings, we set out <br/>to create a space where people could indulge in the finest coffee while savoring delectable culinary creations.
          <br/>From the moment we opened our  doors,we have been dedicated to offering an <br/>exceptional experience to our valued customers.Our journey started with a passionate team of coffee <br/> connoisseurs and talented chefs who shared a common goal:<br/> <b>to create a café that would become a beloved gathering place in the community.</b></p>
          </center>
          </div>
      
      <br />
      <br />
      <div className='img3'>
      </div >
      <center>
        <div className='style2'>
          <h3>Community and Sustainability</h3>
          <p>We are proud to be an active member of our community. We strive to create an inclusive and welcoming space  where people <br/>can connect, relax, and forge new friendships. By hosting local events, showcasing art, and supporting  local <br/>  talent, we aim to foster a vibrant and inspiring environment for all.<br/>
           
        </p></div>
      </center>
      <Footer />
    </div >

  );
}

export default About;
