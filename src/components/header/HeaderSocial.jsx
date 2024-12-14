import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";



const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com/in/omar-safi-63a508327" target='_blank' ><BsLinkedin /></a>
        <a href="https://github.com/Omarsafii2" target="_blank"><BsGithub /></a>
        <a href="https://web.facebook.com/?locale=ar_AR&_rdc=1&_rdr#" target="_blank"><BsFacebook /></a>
      
    </div>
  )
}

export default HeaderSocial
