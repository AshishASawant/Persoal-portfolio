import React, { useState } from "react";
import "./navbar.css"
import {LuMoon,LuSun} from 'react-icons/lu'
const Navbar = () => {


  const [mode, setMode] = useState('dark')

  let changeMode=()=>{
    setMode((mode==="light")?'dark':'light')
    document.body.classList.toggle('dark-theme')
  }

    let showMenu=()=>{
        let navMenu=document.getElementById('nav-menu');
        navMenu.classList.toggle('show-menu');
    }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav-logo">
          Ashish
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item" onClick={showMenu}>
              <a href="#home" className="nav-links active">
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item" onClick={showMenu}>
              <a href="#about" className="nav-links">
              <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item" onClick={showMenu}>
              <a href="#skills" className="nav-links">
              <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            {/* <li className="nav-item" onClick={showMenu}>
              <a href="#experince" className="nav-links">
              <i className="uil uil-bag-alt nav-icon"></i> Experience
              </a>
            </li> */}
            <li className="nav-item" onClick={showMenu}>
              <a href="#portfolio" className="nav-links">
              <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item" onClick={showMenu}>
              <a href="#contact" className="nav-links">
              <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav-close" onClick={showMenu}></i>
        </div>
        <div className="nav-btn nav-item" >
          {
            mode==='dark'?<LuMoon id="theme-btn" className="change-theme" onClick={changeMode}></LuMoon>:<LuSun id="theme-btn" className="change-theme" onClick={changeMode}></LuSun>
          }
            <div className="nav-toggle" onClick={showMenu}>
            <i className="uil uil-apps"></i>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
