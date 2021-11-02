  
import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player"

const About = () => {
  return <>
    <section className="section about-image">
   <div className="about-text">
   <h1>Contact us</h1> 
      
    <Link to="/" className="btn btn-primary ">back home</Link>
        
   </div>
      
    </section>

    <section className=' about-presentation'>
       <div className="about-us">
         <h4>Greetings & Welcome</h4>
         <h1>Know More About Us</h1>
         <hr />
         <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>
         <div className="tg-btns">
         <Link to="/about" className=" tg-btn btn-primary ">Our history</Link>
         <Link to="/about" className="tg-btn btn ">Meet Our Team</Link>
         </div>
       </div>

       <div >
       <ReactPlayer url="https://www.youtube.com/watch?v=acwr_Islo9A"/>
       </div>
      

    </section>
    </>
}

export default About