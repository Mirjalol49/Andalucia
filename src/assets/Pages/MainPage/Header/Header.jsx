/* eslint-disable react/no-unescaped-entities */

import Youtube from "../../../Images/youtube.svg";
import Telegram from "../../../Images/telegram.svg";
import Facebook from "../../../Images/facebook.svg";
import Instagram from "../../../Images/instagram.svg";
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
              <a className="nav-link" href="#natijalar">
                Natijalar
              </a>
              <a className="nav-link" href="#kurslar">
                Ustozlarimiz
              </a>
              <a className="nav-link" href="#kurslar">
                Kursimiz haqida
              </a>
            </nav>
          </div>
          <div className="header-social-wrapper">
            <a
              className="header-social__link"
              href="https://www.youtube.com/@andaluciantm/videos"
              target="blank"
            >
              <img
                className="header-social__img"
                src={Facebook}
                alt="facebook icon"
              />{" "}
            </a>
            <a
              className="header-social__link"
              href="https://www.instagram.com/andalucia.uz/?igsh=eWVnMmIwczI3anF2"
              target="blank"
            >
              <img
                className="header-social__img"
                src={Instagram}
                alt="instagram icon"
              />{" "}
            </a>
            <a
              className="header-social__link"
              href="https://www.youtube.com/@andaluciantm/videos"
              target="blank"
            >
              <img
                className="header-social__img"
                src={Youtube}
                alt="youtube icon"
              />{" "}
            </a>
            <a
              className="header-social__link"
              href="https://t.me/Andalucia_uz"
              target="blank"
            >
              <img
                className="header-social__img"
                src={Telegram}
                alt="telegram icon"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
