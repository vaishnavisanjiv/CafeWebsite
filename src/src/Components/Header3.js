import React from 'react'
import { Link } from "react-router-dom";
function Header3() {
  return (
    <div className="nav2">
    <h5>We Are Opening Soon At Many Locations!</h5>
    <button><Link to='/Store' style={{color:'white',textDecoration:'none',fontFamily:'kanit'}}>know more</Link></button>
  </div>
  )
}

export default Header3;