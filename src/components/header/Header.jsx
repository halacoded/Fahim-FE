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
    <header className={user ? "header header--white" : "header"}>
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          FAHIM
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {user ? (
              <>
                <li className="nav__item">
                  <Link to="/main" className="nav__link">
                    Main
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/professor" className="nav__link">
                    Professor
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/Course" className="nav__link">
                    Courses
                  </Link>
                </li>
                <li className="nav__item">
                  <button
                    onClick={handleLogout}
                    className="nav__link nav__link--button"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav__item">
                <Link to="/signin" className="nav__link">
                  Sign up/in
                </Link>
              </li>
            )}
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
