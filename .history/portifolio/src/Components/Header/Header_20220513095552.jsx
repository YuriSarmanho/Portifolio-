import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'

import './Header.css'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Yuri Sarmanho Monteiro</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="foto de perfil" />
        </div>
      </div>
    </header>
  )
}

export default header