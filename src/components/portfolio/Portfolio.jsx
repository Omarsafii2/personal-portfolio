import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/pro1.png"
import IMG2 from "../../assets/pro2.png"
import IMG4 from "../../assets/pro4.png"
import IMG5 from "../../assets/pro5.png"
import IMG6 from "../../assets/pro6.png"


const Portfolio = () => {
  return (
    <section id="portfolio">
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2>

         <div className="container portfolio__container">
             <article className="portfolio__item">
                   <div className="portfolio__item-image">
                      <img src={IMG1} alt="project 1" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn" target="_blank" >Github</a>
                        <a href="https://omarsafii2.github.io/zomato-resturant/" className="btn btn-primary" target="_blank" >LiveDemo</a>
                    </div>
             </article>

             <article className="portfolio__item">
                   <div className="portfolio__item-image">
                      <img src={IMG2} alt="project 1" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                      <a href="https://github.com" className="btn" target="_blank" >Github</a>
                      <a href="https://omarsafii2.github.io/job-heaven/" className="btn btn-primary" target="_blank" >LiveDemo</a>
                    </div>
             </article>

        

             <article className="portfolio__item">
                   <div className="portfolio__item-image">
                      <img src={IMG4} alt="project 1" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                      <a href="https://github.com" className="btn" target="_blank" >Github</a>
                      <a href="https://github.com" className="btn btn-primary" target="_blank" >Github</a>
                    </div>
             </article>

             <article className="portfolio__item">
                   <div className="portfolio__item-image">
                      <img src={IMG5} alt="project 1" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                      <a href="https://github.com" className="btn" target="_blank" >Github</a>
                      <a href="https://github.com" className="btn btn-primary" target="_blank" >Github</a>
                    </div>
             </article>

             <article className="portfolio__item">
                   <div className="portfolio__item-image">
                      <img src={IMG6} alt="project 1" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                      <a href="https://github.com" className="btn" target="_blank" >Github</a>
                      <a href="https://omarsafii2.github.io/airbnb/" className="btn btn-primary" target="_blank" >LiveDemo</a>
                    </div>
             </article>
         </div>
    </section>
      
  )
}

export default Portfolio
