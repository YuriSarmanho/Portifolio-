import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './Service.css'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web De</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'></BsCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Service