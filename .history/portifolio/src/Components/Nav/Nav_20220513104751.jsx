import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookAlt/></a>
      <a href="#service"><AiOutlineHome/></a>
      <a href="#contact"><AiOutlineHome/></a>
    </nav>
  )
}

export default Nav