import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'
import Navbar from '../Navbar/Navbar'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import * as Unicons from '@iconscout/react-unicons';



const About = () => {
  return (
    <div className="About" id='about'>

        <h1 className='sectionTitle'><code className='codeText'>
        {"<Intro>"}
        </code>  About Me  </h1>
       <div className="aboutContainer">
       <div className="about-text">
            <p>
            Hello! My name is Ankit and         <p>I'm a Fullstack Developer based in India. I love to build things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>

            </p>
            <p>
            Whenever I'm not sleeping, I'm usually working on a project for a Hackathon or contributing to Open Source. I'm currently a student at NIT Rourkela. I'm also a part of Webwiz, Technical Club of our college.
            </p>
            
            <h5>Here are a few technologies I’ve been working with recently:</h5>
           
           <div className="aboutTechStack">
            <ul>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Firebase/Node JS</li>
            </ul>
            
           </div>
           <h3>
           <code className='codeText'>
        {"</Intro>"}
        </code>
           </h3>
        
        </div>
        <div className="profileImage">
          
<lottie-player
  autoplay
  
  loop
  mode="normal"
  src="https://lottie.host/bf4169f2-ea15-4055-a6ea-6ea6699d2cd4/qKlZ5hn66H.json"
  
></lottie-player>
        </div>
       </div>
        
    </div>
  )
}

export default About