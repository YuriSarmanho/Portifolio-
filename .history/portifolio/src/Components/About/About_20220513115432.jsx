import React from 'react'
import ME from '../../assets/me-about.jpg'
import './About.css'

const About = () => {
  return (
    <section id='about'>
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
            <div className="about__card">
              <h5>Experience</h5>
              <small>Experience</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About