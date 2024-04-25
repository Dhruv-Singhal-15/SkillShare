import React from 'react'
import './Courses.css'

import { Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '../../utils/common'
import data from '../../utils/slider.json'




function Courses() {
  return (
    <section className='r-wrapper'>
        
            <div className='paddings innerWidth r-container'>
                <div className='r-head flexColStart'>
                <span className='orangeText'>
                Best Choice

                </span>
                <span className='primaryText'>
                Popular Courses

                </span>

                </div>
                <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card,i)=> (
                        <SwiperSlide key={i}>
                        <div className=' flexColCenter r-card'>
                        <img src={card.image} alt='home' />
                            <span className="secondaryText r-price">
                                <span style={{color: "orange"}} >Rs.</span> 
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.details}</span>

                        </div>

                           
                        </SwiperSlide>
                    ))
                }

                </Swiper>
            </div>
        
    </section>
  );
};

export default Courses;
const SliderButtons=()=>{
    const swiper=useSwiper();

    return(
        <div className=' flexCenter r-buttons'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;
            </button>
        </div>
    );

}
