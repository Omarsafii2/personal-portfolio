import React from 'react'
import "./footer.css"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo' >Omar</a>

       <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experince">Experince</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100011320446318&locale=ar_AR" target='_blank' ><BsFacebook  /></a>
          <a href="https://www.instagram.com/omar_safi12/?next=%2F" target="_blank"><BsInstagram /></a>
          <a href="https://x.com/?lang=ar" target="_blank"><FaTwitter /></a>
       </div>


       <div className="footer__copyright">
          <small>&copy; Omar Safi. All rights reserved</small>
       </div>   
    </footer>
  )
}

export default Footer
