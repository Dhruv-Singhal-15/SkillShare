import React from 'react'
import './Footer.css';


function Footer() {
  return (
   <section className='f-wrapper'>
   
   <div className='padding flexCenter innerWidth f-container'>
   <div className='flexColStart f-left '>
   <img src='./logo_bg.png' alt ='' width={300} />

   <span className='SecondaryText'>
   <h3>About Us</h3>
   <br/>
   A course recommendation site helps users find the right educational courses for their 
   <br/>

   interests and goals. Using personalized suggestions, user reviews, and advanced <br/>

    algorithms, Users can explore, enroll, track progress, and engage with a <br/>
    learning community for a seamless and enjoyable learning experience.<br/>
    to get their best course for their Upskills.


   </span>
   </div>
   <div className='flexColStart f-right'>
    <span className='primaryText'>
        Information
    </span> 
    <span className='seconadryText'>
    <h3>Address</h3>
    
    Sector 62 Noida , Uttarpradesh, India

    </span>
    <div className='flexCenter f-menu'>
        <span>
            Home
        </span>
        <span>
            course
        </span>
        <span>
            Services
        </span>
        <span>
            About us
        </span>
    </div>
   </div>





   </div>



   </section>
  )
}

export default Footer
