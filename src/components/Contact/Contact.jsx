import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'



function Contact() {
  return (
    
        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>

                <div className='flexColStart c-left'>
                    <span className='orangeText'>
                    Our Contacts

                    </span>
                    <span className='primaryText'>
                    Easy to Contact Us

                    </span>
                    <span className='secondaryText'>
                        we are Ready to Provide best services 
                    </span>
                    <div className='flexColStart conatactModes'>
                    {/* first row */}
                    <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                           <MdCall size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>
                                call 
                            </span>
                            <span className='secondaryText'>
                                98210 XXXXX
                            </span>
                        </div>
                    </div>
                     <div className='flexCenter button'> Call Now</div>


                    </div>

                    {/*Second mode */}
                    <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                           <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>
                                Chat
                            </span>
                            <span className='secondaryText'>
                                98210 XXXXX
                            </span>
                        </div>
                    </div>
                     <div className='flexCenter button'> Chat Now</div>


                    </div>


                    </div>

                    {/* Second Row */}
                    <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                           <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>
                                Mail 
                            </span>
                            <span className='secondaryText'>
                                skillsprint@gmail.com
                            </span>
                        </div>
                    </div>
                     <div className='flexCenter button'> Mail Now</div>


                    </div>

                    {/*Second mode */}
                    <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                           <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>
                                Message
                            </span>
                            <span className='secondaryText'>
                                98210 XXXXX
                            </span>
                        </div>
                    </div>
                     <div className='flexCenter button'> Message Now</div>


                    </div>


                    </div>

                    



                    </div>
                </div>
            </div>
        </section>


                        





    
  )
}

export default Contact