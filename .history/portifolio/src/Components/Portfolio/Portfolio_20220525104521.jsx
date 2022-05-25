import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data  = [
  {
    id:1,
    image:IMG1,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
  {
    id:2,
    image:IMG2,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
  {
    id:3,
    image:IMG3,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
  {
    id:4,
    image:IMG4,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
  {
    id:5,
    image:IMG5,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
  {
    id:6,
    image:IMG6,
    title:"Crypto Currency & Financial Visualization",
    github:'http://github.com ',
    demo: "#"
  },
]

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
             
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
