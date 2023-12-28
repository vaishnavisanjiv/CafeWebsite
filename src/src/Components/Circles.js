import React from "react";
import im1 from './img/croissant.JPG';
import im2 from './img/tang.JPG';
import im3 from './img/toast.JPG';
import im4 from './img/cheesecake.JPG';
import im5 from './img/mocha.JPG';
import im6 from './img/taco.JPG';

function Circles(){
    return(
      <div className="c1">
        <h4>Our Specialties</h4>
        <img src={im1}></img><figcaption>Croissant</figcaption>
        <img src={im2}></img><figcaption>Peach Tea</figcaption>
        <img src={im3}></img><figcaption>Mexican toast</figcaption>
        <img src={im4}></img><figcaption>Cheesecake</figcaption>
        <img src={im5}></img><figcaption>Mocha </figcaption>
        <img src={im6}></img><figcaption>Tacos</figcaption>
      </div>
    );
}

export default Circles;