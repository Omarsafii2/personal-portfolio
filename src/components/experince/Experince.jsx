import React from 'react'
import "./experince.css"
import { BsPatchCheckFill } from "react-icons/bs";


const Experince = () => {
  return (
    <section id='experince'>
       <h5>What Skills I Have</h5>
       <h2>My Experince</h2>

       <div className="container experince__container"> 
          <div className="experince__frontend">
             <h3>Frontend Development</h3>
             <div className="experince__content">
                <article className='experince__details' >
                  <BsPatchCheckFill  className="experince__details-icon"/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light' >Experienced</small>
                  </div>
                </article>

                <article className='experince__details' >
                  <BsPatchCheckFill className="experince__details-icon"/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light' >Experienced</small>
                  </div>
                </article>

                <article className='experince__details' >
                  <BsPatchCheckFill className="experince__details-icon"/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light' >Experienced</small>
                  </div>
                </article>

                <article className='experince__details' >
                  <BsPatchCheckFill className="experince__details-icon"/>
                    <div>
                      <h4>Bootstrap</h4>
                      <small className='text-light' >Experienced</small>
                    </div>
                </article>

                <article className='experince__details' >
                  <BsPatchCheckFill className="experince__details-icon"/>
                   <div>
                      <h4>React</h4>
                      <small className='text-light' >Intermediate</small>
                   </div>
                </article>
             </div>

          </div>


          <div className="experince__backend">

              <h3>Backend Development</h3>
                <div className="experince__content">
                    <article className='experince__details' >
                      <BsPatchCheckFill className="experince__details-icon"/>
                      <div>
                        <h4>PHP</h4>
                        <small className='text-light' >Experienced</small>
                      </div>
                    </article>

                    <article className='experince__details' >
                      <BsPatchCheckFill className="experince__details-icon" />
                       <div>
                          <h4>Laravel</h4>
                          <small className='text-light' >Experienced</small>
                       </div>
                    </article>

                    <article className='experince__details' >
                      <BsPatchCheckFill className="experince__details-icon"/>
                       <div>
                          <h4>MySql</h4>
                          <small className='text-light' >Experienced</small>
                       </div>
                    </article>

                    <article className='experince__details' >
                      <BsPatchCheckFill className="experince__details-icon"/>
                       <div>
                          <h4>Node JS</h4>
                          <small className='text-light' >Experienced</small>
                       </div>
                    </article>

                </div>

          </div>
       </div>
    </section>
  )
}

export default Experince
