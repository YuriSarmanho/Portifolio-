import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav>
      <a href="#" className={activeNav} onClick={()=>setActiveNav('#')} className=>
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBookAlt />
      </a>
      <a href="#service">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
