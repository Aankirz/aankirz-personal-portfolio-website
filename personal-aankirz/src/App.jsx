import React from 'react';

import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "react-scroll-to-top";

import * as Unicons from '@iconscout/react-unicons';



import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Qualification from './Components/Qualification/Qualification'
import Socials from './Components/Socials/Socials'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
   <div className="App">

  <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={30}
          color="177, 84, 208"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={3}
        />
  </div>

   <Socials/>
    
   <Navbar/>
    
    
    <Hero/>
    
    <About/>

    <ScrollToTop smooth component={<p style={{ background:"none",color:"black",fontSize:"18px",position:"relative"}}><img src="https://img.icons8.com/ios-glyphs/30/null/circled-chevron-up.png"/></p>} />


    <Projects/> 

    <Qualification/>

<Contact/>
   </div>
  )
}

export default App