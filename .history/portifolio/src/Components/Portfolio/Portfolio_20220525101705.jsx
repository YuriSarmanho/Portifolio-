import React from "react";
import "./Portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portifolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="http://github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portifolio;