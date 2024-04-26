import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



import "./Header.css" 




const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src='./logo_skill.jpg' alt='logo'  width={200} style={{ borderRadius: '10px' }}/>

            <div className=" flexCenter h-menu">
                <a href="./">Home</a>
                <a href="./Courses">Courses </a>
                {/* <a href=""> Categories</a> */}
                <a href="./Companies"> Companies</a>
                <a   href='./Footer'>About us</a>
                <a href="./Contact">Contact Us</a>
                <button className='button'>
                    <a href="">Login</a>
                </button>
                



            </div>

        </div>
      </section>

    </div>
  )
}

export default Header
