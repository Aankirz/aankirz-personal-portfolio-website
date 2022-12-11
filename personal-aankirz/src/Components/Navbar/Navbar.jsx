import React from 'react'
import { Link } from "react-scroll";
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
        <div className="logo">
            <h1>AK</h1>
        </div>
        <ul>
            <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >Home</Link> </li>
            <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >About</Link></li>
            
            <li><Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
                Projects
              </Link>
              </li>
            
            <li>
              <Link
              activeClass="active"
              to="qualification"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
              Qualification  
                </Link></li>
           
          
            
        </ul>
        <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
              <button className='sectionButton'><i class="fa-solid fa-print"></i></button>
                
              </Link>
    </div>
  )
}

export default Navbar