import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials  = () => {
  return (
      <div className="header__social">
          <a href="http://linkedin.com/" target="_blank"><BsLinkedin/></a>
          <a href="http://github.com/yuriSarmanho" target="_blank"><FaGithub/></a>
          <a href="http://instagram.com/yuri.sarmanho" target="_blank"></a>
      </div>
  )
}

export default HeaderSocials