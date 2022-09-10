import React from 'react';
import {RiMenuLine, RiCloseline} from 'react-icons/ri';

import './navbar.css';

// BEM --> Block ELement Modifier

const Navbar = () => {
  return (
    <div className = "gpt3__navbar">
      <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
      </div>
    </div>
  )
}

export default Navbar