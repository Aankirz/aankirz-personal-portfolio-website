import React from 'react'
import './Qualification.css'
import experience1 from "../../assets/experience1.png"
import experience2 from "../../assets/experience2.png"
import education1  from "../../assets/education1.png"
import education2  from "../../assets/education2.png"


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

           <button className={toggle===1?"active":null}
           
            onClick={()=>toggleHandler(1)}>
            Experience
            
            </button>
           <button className={toggle===2?"active":null}
           
           onClick={()=>toggleHandler(2)}
           
           >Education</button>  

           <div className='experienceContent' style={toggle ===2 ? {display:"none"}:{} }>

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
              <div className='experience'>
                <div className='experienceImg'>
                <img src={experience2} alt="" />
                </div>
                <div>
                    <h3>Web Developer</h3>
                    <p>Webwiz | FullTime</p>
                    <p>November 2022 - Present</p>
                </div>
                
              </div>
            

           </div>
           <div className="educationContent" style={toggle ===1 ? {display:"none"}:{} } >
              <div className="education">
                <div className="educationImg">
                <img src={education1} alt="" />
                </div>
                <div>
                  
                    <h3>NIT Rourkela</h3>
                    <p>B.Tech </p>
                    <p>December 2021 - Jul 2025</p>
                </div>     
              </div>

              <div className="education">
                <div className="educationImg">
                <img src={education2} alt="" />
                </div>
                <div>
                  
                    <h3>Army Public School Gopalpur</h3>
                    <p>10th - 12th</p>
                    <p>June 2018 - Mar 2020</p>
                </div>     
              </div>
            </div>  
        </div>
    </div>
    
   </div>
 

  )
}

export default Qualification