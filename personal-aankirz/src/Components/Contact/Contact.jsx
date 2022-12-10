import React from 'react'
import './Contact.css'

import profile from '../../assets/profile.png'

const Contact = () => {
  return (
    <div className="Contact" id='contact'>
        <div className="userCard">
            <div className="userImg">
               <img src={profile} alt="" />
            </div>
            <div className="userName">
              <h3>Ankit Kiran <img src="https://img.icons8.com/ios-glyphs/30/00AAFF/verified-account--v1.png"/></h3>
              <h6><img src="https://img.icons8.com/material-outlined/24/818a91/approval.png"/>Official</h6>
            </div>   
        </div>

        <div className="contactMessage">
          <h1>What's Next</h1>
          <p>Are you looking for a developer? Great, I'd love to help you out. I'm currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in which I can use my skills to help others and make an impact.</p>
        </div>

    </div>
  )
}

export default Contact