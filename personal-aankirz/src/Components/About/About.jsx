import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'
import Navbar from '../Navbar/Navbar'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import * as Unicons from '@iconscout/react-unicons';



const About = () => {
  return (
    <div className="About">

        <h1 className='sectionTitle'><code className='codeText'>
        {"<Intro>"}
        </code>  About Me  </h1>
       <div className="aboutContainer">
       <div className="about-text">
            <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
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