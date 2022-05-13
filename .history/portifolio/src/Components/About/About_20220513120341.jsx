import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
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
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
              aspernatur ab fugit minima consequatur perferendis omnis, quaerat
              repellat quidem nam nemo possimus illum facilis, molestias
              repellendus. Assumenda distinctio eveniet dolores.
            </p>
            <a href="#contact" className=""></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
