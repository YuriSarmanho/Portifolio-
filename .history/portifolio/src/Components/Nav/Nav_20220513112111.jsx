import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import ''
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookAlt/></a>
      <a href="#service"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav