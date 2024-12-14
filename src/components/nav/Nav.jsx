import React from 'react'
import "./nav.css"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

import {useState} from 'react';






const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');  

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#'? 'active': ''}><IoHomeOutline /></a>
      <a href=" #about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'? 'active': ''}><FaRegUser /></a>
      <a href="#experince"  onClick={() => setActiveNav('#experince')} className={activeNav==='#experince'? 'active': ''} > <FiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services'? 'active': ''} ><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''} ><MdOutlineMessage /></a> 
    </nav>
  )
}

export default Nav
