import React from 'react'
import "./services.css"
import { FaCheck } from "react-icons/fa";


const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                  <h3>UI/UX</h3>
                </div>
                <ul className='service__list' >
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                </ul>
            </article>

            <article className="service">
            <div className="service__head">
                  <h3>Web Development</h3>
                </div>
                <ul className='service__list' >
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                </ul>
            </article>

            <article className="service">
            <div className="service__head">
                  <h3>Content Creation</h3>
                </div>
                <ul className='service__list' >
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                  <li>
                    <FaCheck className='service__list-icon' />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </li>
                </ul>
            </article>
        </div>

    </section>
  )
}

export default Services
