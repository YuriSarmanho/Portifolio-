import React from "react";
import "./Portfolio.css";
import IMG1 from '../../assets/portfoli1.jpg'
import IMG2 from '../../assets/portfoli2.jpg'
import IMG3 from '../../assets/portfoli3.jpg'
import IMG4 from '../../assets/portfoli4.jpg'
import IMG5 from '../../assets/portfoli5.png'
import IMG6 from '../../assets/portfoli6.jpg'

const Portfolio = () => {
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
      </div>
    </section>
  );
};

export default Portifolio;
