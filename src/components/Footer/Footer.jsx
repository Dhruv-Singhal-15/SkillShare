import React from 'react'
import './Footer.css';


function Footer() {
  return (
   <section className='f-wrapper'>
   
   <div className='padding flexCenter innerWidth f-container'>
   <div className='flexColStart f-left '>
   <img src='./logo.jpg' alt ='' width={120} />

   <span className='SecondaryText'>
   our vision is to make all people <br/>
   to get their best course for their Upskills.


   </span>
   </div>
   <div className='flexColStart f-right'>
    <span className='primaryText'>
        Information
    </span> 
    <span className='seconadryText'>
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
