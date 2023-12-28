import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonials(){
    return(

	<div>
    <center><h3 style={{marginTop:'38%',marginLeft:'6%',fontSize:'23px',fontFamily:'kanit',color:'#033539'}}>Our Reviews</h3></center>
     <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997649.png" />
            <div className="myCarousel">
              <h3>John Sebastian</h3>
              <br/>
              <p>
              This cozy cafe has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wonderful dessert.
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" />
          <div className="myCarousel">
            <h3>isabella Grande</h3>
           <br/>
            <p>
            It’s a great experience. The ambiance is very welcoming and charming. Amazing food and service. Staff are extremely knowledgeable.
            </p>
          </div>
        </div>

        </div>

        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997649.png" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <br/>
              <p>
              This place is great! Atmosphere is chill and cool but the staff is also really friendly.HIghly recommended!! 
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" />
          <div className="myCarousel">
            <h3>Alice Walker</h3>
           <br/>
            <p>
            Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.
            </p>
          </div>
        </div>

        </div>

        <div className="testcon">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" />
            <div className="myCarousel">
              <h3>Angelica Hale</h3>
              <br/>
              <p>
              I have to say, I enjoyed every single bite of the meal in Bella Italia. Considering the quality, the price is reasonable. 
              </p>
            </div>
          </div>
          <div><h1 style={{color:'white'}}>hh</h1></div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/128/6997/6997649.png" />
          <div className="myCarousel">
            <h3>Beatrix Potter</h3>
           <br/>
            <p>
            Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It is worth trying!
            </p>
          </div>
        </div>

        </div>
      </Carousel>
  </div>
  

    );
}
export default Testimonials;
