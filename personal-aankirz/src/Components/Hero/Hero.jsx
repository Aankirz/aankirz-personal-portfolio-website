import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <div className="Hero" id="home">
    <div className="hero-text">
        <code className='codeText'>
        {"<portfolio>"}
        </code>
        <h1>
          <code className='codeText'>
        {"<hello>"}
        </code>
        Hi, I'm <span className="name">Ankit</span>
       
        </h1>
        
        @Aankirz 

        <h2>I'm a <span className="job">Fullstack Developer</span></h2>
        <p>Exploring my interests | NITRkl'25 | Web Developer |React Frontend Dev (Chrome Extensions and Web Apps)| Loves Open source, Hacktoberfest'22 Contributor| Winner of 2 MLH Hackathons | Knows "How to Google"</p>
        
        <p>Welcome to my digital garden. 🌱</p>
        <code className='codeText'>
        {"</hello>"}
        </code>
        
        </div>
   </div>
  )
}

export default Hero