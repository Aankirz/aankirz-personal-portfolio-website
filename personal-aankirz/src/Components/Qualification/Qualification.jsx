import React from 'react'
import './Qualification.css'
import experience1 from "../../assets/experience1.png"

const Qualification = () => {
  
  const [toggle,setToggle]=React.useState(1);

  const toggleHandler=(index)=>{
    console.log("clicked");
    setToggle(index);
    console.log(toggle);
  }

   
  return (
   <div className="Qualification" id='qualification'>
    <h1 className='sectionTitle'>Qualification</h1>

    <div className="qualificationContainer">

        <div className="sectionAnimation">
        <lottie-player
  autoplay
  loop
  mode="normal"
  src="https://lottie.host/09b75c2a-a5ed-4da8-8e32-ed4054e896e1/tNIOqsKjQ9.json"
  
></lottie-player>
        </div>

        <div className="qualificationContent">

           <button className='active' onClick={()=>toggleHandler(2)}>Experience</button>
           <button>Education</button>  

           <div className='experienceContent'>

              <div className='experience'>
                <div className='experienceImg'>
                <img src={experience1} alt="" />
                </div>
                <div>
                    <h3>VR Developer</h3>
                    <p>Skilledset | Intern</p>
                    <p>November 2022 - Present</p>
                </div>
                
              </div>

           </div>
        </div>
    </div>
    
   </div>
 

  )
}

export default Qualification