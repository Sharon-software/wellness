import React from 'react';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import { Link } from "react-router-dom";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const About = () => {
  return (
    <section>
      <div className="content">
        <div className="info-box">
          <Link to ="/Corporate">
          <h3>CORPORATE WELLNESS & ORGANISATIONAL SUPPORT</h3>
          <img src={img2} alt="img2" />
          
          </Link>
        </div>

        <div className="info-box">
          <Link to="/Schools">
          <h3>SCHOOL & EDUCATIONAL INSTITUTION PROGRAMS</h3>
          <img src={img1} alt="img1" />
          
          
          </Link>
        </div>

        <div className="info-box">
          <Link to="/Government">
          <h3>GOVERNMENT & COMMUNITY DEVELOPMENT SERVICES</h3>
          <img src={img3} alt="img3" />
          
      </Link>
        </div>
        
      </div>
    </section>
  );
};

export default About;