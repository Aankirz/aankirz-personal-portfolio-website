import React from 'react'
import './Socials.css'

import * as Unicons from '@iconscout/react-unicons';

const Socials = () => {
  return (
    <div className="Socials">
        <div className="socialEmail">
            <div className="emailText">
                <a href={`mailto:sahuankit453@gmail.com`} target="_blank">
                    sahuankit453@gmail.com
                </a>
            </div>
          <div className="vl">
          </div>

        </div>  
     <div className="socialProfiles">
        <div className='socialIcons'>
            
            <a href="https://github.com/Aankirz" target="_blank"><Unicons.UilGithub/></a>
            <a href="https://www.linkedin.com/in/ankit-kiran-3819b0219/" target="_blank"><Unicons.UilLinkedinAlt/></a>
            <a href="https://twitter.com/AnkitKiran7" target="_blank"><Unicons.UilTwitterAlt/></a>
            
            

        </div>
        <div className="vl">
        </div>
     </div>
     
     
        
    </div>
  )
}

export default Socials