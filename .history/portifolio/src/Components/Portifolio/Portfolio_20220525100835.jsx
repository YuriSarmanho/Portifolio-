import React from "react";
import "./Portfolio.css";
import IMG1 from '../../assets/portfoli1.jpg'
import IMG1 from '../../assets/portfoli1.jpg'
import IMG1 from '../../assets/portfoli1.jpg'
import IMG1 from '../../assets/portfoli1.jpg'
import IMG1 from '../../assets/portfoli1.jpg'
import IMG1 from '../../assets/portfoli1.jpg'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
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
