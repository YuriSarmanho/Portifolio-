import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './Experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="experience__content">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>

          </div>    
      </div>

      <div className="container experience__container">
          <div className="experience__backend">

          </div>
      </div>
    </section>
  )
}

export default experience