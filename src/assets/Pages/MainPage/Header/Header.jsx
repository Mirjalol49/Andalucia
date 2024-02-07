/* eslint-disable react/no-unescaped-entities */

import Darkmode from "../../Darkmode/Darkmode";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-inwrapper">
            <a className="header-logo" href="https://www.andalucia.uz/">
              Andalucia
            </a>

            <nav className="header-nav">
              <a className="nav-link" href="#kurslar">
                Kurslar
              </a>
              <a className="nav-link" href="#kurslar">
                Jamoa
              </a>
              <a className="nav-link" href="#kurslar">
                Natijalar
              </a>
            </nav>
          </div>
          <Darkmode />
        </div>
      </div>
    </header>
  );
};

export default Header;
