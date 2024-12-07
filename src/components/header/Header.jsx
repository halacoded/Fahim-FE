import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./header.css";
import { logout } from "../../api/storage";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false); // Clear user context
    logout();
    navigate("/"); // Redirect to sign-in page
  };

  return (
    <header
      className={user ? "custom-header custom-header--white" : "custom-header"}
    >
      <nav className="custom-nav container">
        <Link to="/" className="custom-nav__logo">
          FAHIM
        </Link>
        <div
          className={
            Toggle ? "custom-nav__menu custom-show-menu" : "custom-nav__menu"
          }
        >
          <ul className="custom-nav__list grid">
            {user ? (
              <>
                <li className="nav__item">
                  <Link to="/main" className="custom-nav__link">
                    Main
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/professor" className="custom-nav__link">
                    Professor
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/Course" className="custom-nav__link">
                    Courses
                  </Link>
                </li>
                <li className="nav__item">
                  <button
                    onClick={handleLogout}
                    className="custom-nav__link--button custom-nav__link"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav__item">
                <Link to="/signin" className="custom-nav__link">
                  Sign up/in
                </Link>
              </li>
            )}
          </ul>
          <i
            className="uil uil-times custom-nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="custom-nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
