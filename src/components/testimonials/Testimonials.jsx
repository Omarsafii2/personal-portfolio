import React from 'react'
import "./testimonials.css"
import ava1 from "../../assets/avatar1.jpg"
import ava2 from "../../assets/avatar2.jpg"
import ava3 from "../../assets/avatar3.jpg"
import ava4 from "../../assets/avatar4.jpg"


import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
       <h5>Review From Clients</h5>
       <h2>Testimonials</h2>
       <Swiper className="container testimonials__container"
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
       >
          <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                  <img src={ava1} alt="avatar 1" />
              </div>
                  <h5 className='client__name'>Ernest Achiever</h5>
                  <small className='client__review' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora blanditiis soluta quia rerum consectetur eos?</small>
              
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                  <img src={ava2} alt="avatar 1" />
              </div>
                  <h5 className='client__name'>jonathan </h5>
                  <small className='client__review' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur natus reprehenderit enim perspiciatis odit!</small>
              
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                  <img src={ava3} alt="avatar 1" />
              </div>    
                  <h5 className='client__name'> wileam </h5>
                  <small className='client__review' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, doloremque. Quis temporibus quae officiis ratione.</small>
              
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                  <img src={ava4} alt="avatar 1" />
              </div>    
                  <h5 className='client__name'> sara </h5>
                  <small className='client__review' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus, culpa distinctio illo placeat quisquam!</small>
          </SwiperSlide>
       </Swiper>
    </section>
  )
}

export default Testimonials
