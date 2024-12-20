import React from 'react'
import "./contact.css"
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from "emailjs-com";




const Contact = () => {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g6lxz4w', 'template_8xy8dyc', form.current,  'YPqIC2z8uJuzrl_aM')
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

        e.target.reset();
      };





  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact__container">
          <div className="contact__options">
              <article className='contact__option'>
                  <HiOutlineMail className='contact__option-icon'/>
                  <h4>Email</h4>
                  <h5>omar.j.safi@gmail.com</h5>
                  <a href="mailto:omar.j.safi@gmail.com" target="_blank">Send a message</a>
              </article>

              <article className='contact__option'>
                  <BsMessenger className='contact__option-icon'/>
                  <h4>Messenger</h4>
                  <h5>omar safi</h5>
                  <a href="https://web.facebook.com/profile.php?id=100011320446318" target="_blank">Send a message</a>
              </article>

              <article className='contact__option'>
                  <BsWhatsapp className='contact__option-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+962785966673</h5>
                  <a href="https://api.whatsapp.com/send?phone=+962785966673" target="_blank">Send a message</a>
              </article>
          
          </div>

          <form   ref={form} onSubmit={sendEmail} className='contact__form'>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>          
    </section>
  )
}

export default Contact
