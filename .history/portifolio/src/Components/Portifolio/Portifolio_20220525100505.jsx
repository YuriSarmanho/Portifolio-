import React from 'react'
import './Portifolio.css'

const Portifolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image"></div>
          <h3>This is a portifolio item title</h3>
          <a href="http://github.com" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' >Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portifolio