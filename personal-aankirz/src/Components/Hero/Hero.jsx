import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <div className="Hero">
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
        <p>I'm a Frontend Developer based in India. I love to build things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
        <code className='codeText'>
        {"</hello>"}
        </code>
        
        </div>
   </div>
  )
}

export default Hero