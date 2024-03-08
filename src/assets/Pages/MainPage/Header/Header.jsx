/* eslint-disable react/no-unescaped-entities */

import Youtube from "../../../Images/youtube.svg";
import Telegram from "../../../Images/telegram.svg";
import Facebook from "../../../Images/facebook.svg";
import Instagram from "../../../Images/instagram.svg";

import "./Header.css";
const Header = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-inwrapper">
            <a className="header-logo" href="https://www.andalucia.uz/">
              Andalucia
            </a>

            <div className="header-nav-wrapper">
              <nav className="header-nav">
                <a className="nav-link" href="#kurslar">
                  Kurslar
                </a>
                <a className="nav-link" href="#natijalar">
                  Natijalar
                </a>
                <a className="nav-link" href="#aboutus">
                  Kursimiz haqida
                </a>
                <a className="nav-link" href="#contact">
                  Biz bilan bog'lanish
                </a>
              </nav>

              <div className="header-social-wrapper">
                <a
                  className="header-social__link  bg-[#0866FF]"
                  href="https://www.facebook.com/share/UrndGXkVFhhbx1CX/?mibextid=qi2Omg"
                  target="blank"
                >
                  <img
                    className="header-social__img"
                    src={Facebook}
                    alt="facebook icon"
                    width={10}
                    height={10}
                  />{" "}
                </a>
                <a
                  className="header-social__link insta-bg"
                  href="https://www.instagram.com/andalucia.uz/?igsh=eWVnMmIwczI3anF2"
                  target="blank"
                >
                  <img
                    className="header-social__img"
                    src={Instagram}
                    alt="instagram icon"
                    width={20}
                    height={20}
                  />{" "}
                </a>
                <a
                  className="header-social__link  bg-red-600"
                  href="https://www.youtube.com/@andaluciantm/videos"
                  target="blank"
                  width={20}
                  height={20}
                >
                  <img
                    className="header-social__img"
                    src={Youtube}
                    alt="youtube icon"
                    width={20}
                    height={20}
                  />{" "}
                </a>
                <a
                  className="header-social__link  bg-[#229ED9]"
                  href="https://t.me/Andalucia_uz"
                  target="blank"
                >
                  <img
                    className="header-social__img"
                    src={Telegram}
                    alt="telegram icon"
                    width={20}
                    height={20}
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
