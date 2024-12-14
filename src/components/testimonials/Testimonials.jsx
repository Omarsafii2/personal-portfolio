import React from 'react'
import "./testimonials.css"
import ava1 from "../../assets/avatar1.jpg"
import ava2 from "../../assets/avatar2.jpg"
import ava3 from "../../assets/avatar3.jpg"
import ava4 from "../../assets/avatar4.jpg"

const Testimonials = () => {
  return (
    <section id='testimonials'>
       <h5>Review From Clients</h5>
       <h2>Testimonials</h2>

       <div className="container testimonials__container">
          <article className='testimonial'>
              <div className="client__avatar">
                  <img src={ava1} alt="avatar 1" />
                  <h5 className='client__name'>Ernest Achiever</h5>
                  <small className='client__review' ></small>
              </div>
          </article>
       </div>
    </section>
  )
}

export default Testimonials
