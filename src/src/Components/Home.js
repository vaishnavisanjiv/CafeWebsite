import React from "react";
import Header from "./Header";
import Circles from "./Circles";
import Article from "./Article";
import Footer from "./Footer";
import Testimonials from './Testimonials'
import Header2 from "./Header2";
import Formm from "./Formm";

function Home(){
    return(
<div>
    <Header/>
    <Header2/>
    <Circles/>
    <Article/>
    <Testimonials/>
    <Footer/>
   
</div>
    );
}
export default Home;