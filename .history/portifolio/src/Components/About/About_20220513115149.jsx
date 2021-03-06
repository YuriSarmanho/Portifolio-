import React from 'react'
import ME from '../../assets/me-'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="" alt="" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  )
}

export default About