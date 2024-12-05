import React, { useState } from "react";
import "./header.css";
const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          FAHIM
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link ">
                <i className="uil uil-estate nav__icon"></i> About us
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#support" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Support
              </a>
            </li>
            <li className="nav__item">
              <a href="#exploer" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Exploer
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#signup" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Sign up/in
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
