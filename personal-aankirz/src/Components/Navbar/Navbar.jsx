import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
        <div className="logo">
            <h1>AK</h1>
        </div>
        <ul>
            <li><a href="#home">Home</a> </li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><button>Say Hello</button></li> 
            
        </ul>

    </div>
  )
}

export default Navbar