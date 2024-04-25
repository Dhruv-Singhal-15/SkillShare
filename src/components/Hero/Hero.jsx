import React from 'react'
import "./Hero.css" 
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <div>
      <section className='hero-wrapper'>
      <div className='paddings innerWidthth flexCenter hero-container '>
      
      <div className=' flexColStart  hero-left '>
        <div className='hero-title' >
        <div className='orange-circle'/>

        <h1>
            Discover
            <br/>

             the best 
             <br/>
             Courses
        </h1>
        <div className='hero-desc flexColStart '>
            <span className='secondaryText'>
                Find the best course for yourself that suit you
            </span>
            <span className='secondaryText'>
            Forget the diffculites

            </span>
        </div>
        <div className=' flexCenter search-bar'>
            <input type='text' />
            <button className='button'>Find</button>

            
        </div>
        <div className='flexCenter stats'>
        <div className='flexColCenter stat'>
            <span>
                <CountUp start={2000} end={5000} duration={4}/>
                <span> + </span>
                
                
            </span>
            <span className='secondaryText'> Students</span>


        </div>
        <div className='flexColCenter stat'>
            <span>
                <CountUp start={50} end={220} duration={4}/>
                <span>+</span>
                
                
            </span>
            <span className='secondaryText'> Courses </span>
            

        </div>
        <div className='flexColCenter stat'>
            <span>
                <CountUp end={100} />
                <span>+</span>
                
                
            </span>
            <span className='secondaryText'> Rating</span>
            

        </div>


        </div>



      </div>
      </div>


      <div className=' flexCenter hero-right'>
        <div className='imgage-container'>
            <img src='Hero.jpg' alt='hero_img'>

            </img>
        </div>

      </div>
      </div> 

      </section>

    </div>
  )
}

export default Hero
