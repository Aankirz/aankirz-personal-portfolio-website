import React from 'react'
import './Projects.css'

import * as Unicons from '@iconscout/react-unicons';

import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'

const Projects = () => {
  return (
    <div className="Projects" id='projects'>
      
        <h1 className='sectionTitle'>
        <code className='codeText'>
        {"<Web>"}
        </code>
          Projects</h1>

       <div className="projectsContainer">
        <div className="projectTechStacks">
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             loop
             mode="normal"

             src="https://assets8.lottiefiles.com/packages/lf20_b23ll34c.json"
  
            ></lottie-player>
          </div>
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             
             mode="normal"
             src="https://assets4.lottiefiles.com/packages/lf20_31gagvgx.json"
            ></lottie-player>
          </div>
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             
             mode="normal"
             src="https://assets9.lottiefiles.com/private_files/lf30_wuuqhfmi.json"
            ></lottie-player>
          </div>
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             loop
             mode="normal"
             src="https://assets7.lottiefiles.com/private_files/lf30_d6czzyqr.json"
            ></lottie-player>
          </div>
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             loop
             mode="normal"
             src="https://assets10.lottiefiles.com/private_files/lf30_9xcevvfo.json"
            ></lottie-player>
          </div>
          <div className="projectTechCard">
          <lottie-player
             autoplay
  
             loop
             mode="normal"
             src="https://assets1.lottiefiles.com/packages/lf20_rgrylcip.json"
            ></lottie-player>
          </div>
        </div>
        <div className="projectCards">
          <div className="projectCard">
          <div className="projectImg">
              <img src={project1} alt="" />
          </div>
          <div className="projectLinks">
              <a href="https://codesandbox.io/s/0ksymn" target="_blank"><Unicons.UilGithub/></a>
              <a href="https://0ksymn.csb.app/" target="_blank"><Unicons.UilArrowCircleUp/></a>
              
          </div>
          </div>
          <div className="projectCard">
          <div className="projectImg">
              <img src={project2} alt="" />
          </div>
          <div className="projectLinks">
              <a href="https://github.com/Aankirz/Tourism-website" target="_blank"><Unicons.UilGithub/></a>
              <a href="https://aankirz.github.io/Tourism-website/" target="_blank"><Unicons.UilArrowCircleUp/></a>
                
          </div>
          </div>

          <button className='sectionButton'>
            View More <Unicons.UilArrowRight/>
          </button>
           
        </div>
       </div>
       <h2>
       <code className='codeText'>
        {"</Web>"}
        </code> 
       </h2>
    </div>
  )
}

export default Projects