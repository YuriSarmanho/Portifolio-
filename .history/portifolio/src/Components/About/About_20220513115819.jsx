import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    //refactor
    <section id="about">
      <h5>Get know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="minha foto" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
