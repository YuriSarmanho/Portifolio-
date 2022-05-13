import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a href="#about"
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience"
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}>
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
