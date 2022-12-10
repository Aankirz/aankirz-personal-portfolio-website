import React from 'react'
import './Projects.css'

import * as Unicons from '@iconscout/react-unicons';

const Projects = () => {
  return (
    <div className="Projects">
      
        <h1 className='sectionTitle'>Projects</h1>

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
              
              {/* <img src="https://images.unsplash.com/photo-1617720000000-1c1a1a1a1a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> */}
          </div>
          <div className="projectLinks">
              <a href=""><Unicons.UilGithub/></a>
          </div>
          </div>
          <div className="projectCard">
          <div className="projectImg">
              
              {/* <img src="https://images.unsplash.com/photo-1617720000000-1c1a1a1a1a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> */}
          </div>
          <div className="projectLinks">
              <a href=""><Unicons.UilGithub/></a>
          </div>
          </div>

          <button className='sectionButton'>
            View More <Unicons.UilArrowRight/>
          </button>
           
        </div>
       </div>
    </div>
  )
}

export default Projects