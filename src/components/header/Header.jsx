import React from 'react'
import  "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'

import useTheme from '../hocks/useTheme'

const Header = () => {
    const { theme, toggleTheme } = useTheme();
  
  return (
    <header>

<div>
      <button className='btn btn-primary' onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      {/* Portfolio content here */}
    </div>

      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Omar Safi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>

        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>



      </div>
   

      </header>
  )
}

export default Header
