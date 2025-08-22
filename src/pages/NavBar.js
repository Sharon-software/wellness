import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import logo from '../images/logo.jpeg'
import { FaHouseChimney } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

import { IoMdText } from "react-icons/io";

const NavBar = () => {
  return (
    <>

  
       <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h1>BM MATHEBULA </h1> 
        
        <div className="navbar">
      <ul>
        <li>
             <NavLink to="/">
             <span className="icon"><FaHouseChimney /></span>
              <span className="text">HOME</span>
              </NavLink>
        </li>

         <li>
             <NavLink to="/about">
              <span className="icon"><FaInfoCircle /></span>
              <span className="text">ABOUT US</span>
              
             </NavLink>
        </li>
         <li>
             <NavLink to="/book">
              <span className="icon"><IoMdText/></span>
              <span className="text">BOOK US</span>
             </NavLink>
        </li>
      </ul>
    </div>
      </div>

      <div className="head">
     <h2>SUPPORT SERVICE AND WELLNESS </h2>
     <h3>Empowering lives through<br>
     </br>holistic psychological support</h3>
    </div>
</div>

     
    
  
    </>
  )
}

export default NavBar