import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import backG from '../images/backG.jpeg'
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <div className="home">
    <div className="service">
     <p>OUR SERVICES</p>
     <ul>
      <li>
        Corporate wellness & organisational support
      </li>
      <li>
        School & educational institution programs  
      </li>
      <li>
        Cross-sector services & expertise
      </li>
      <li>
        Government & community development services
      </li>
      <li>
        Medical & healthcare social work services
      </li>
     </ul>

    </div>
    
     </div>
    
    <footer>
       <div className="social-icons">
        <a href="https://www.facebook.com/share/1PAFvQVMnu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
        <div className="icons"><FaFacebook size={32} /> </div>
      </a>

      <a href="https://wa.me/0761446179" target="_blank" rel="noopener noreferrer">
        <div className="icons"> <FaWhatsapp size={32} /></div>
      </a>
      </div>
    </footer>
    </>
  )
}

export default Home