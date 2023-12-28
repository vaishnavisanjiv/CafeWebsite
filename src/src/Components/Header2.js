import React from 'react'
import { Link } from "react-router-dom";
function Header2() {
  return (
    <div className="nav2">
    <h5>want some benefits?try this</h5>
    <button><Link to='/Formm' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>know more</Link></button>
  </div>
  )
}

export default Header2