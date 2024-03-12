// ... (your imports)

import { useState, useEffect } from "react";
import Youtube from "../../../Images/youtube.svg";
import Telegram from "../../../Images/telegram.svg";
import Facebook from "../../../Images/facebook.svg";
import Instagram from "../../../Images/instagram.svg";
import X from "../../../Images/x.svg";
import "./Header.css";

const Header = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = isMobileNavVisible ? "hidden" : "";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileNavVisible]);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const closeMobileNav = () => {
    setMobileNavVisible(false);
  };

  return (
    <>
      <div className={`mobile-wrapper${isMobileNavVisible ? " visible" : ""}`}>
        <nav className="mobile-nav">
          <a className="nav-link" href="#kurslar" onClick={closeMobileNav}>
            Kurslar
          </a>
          <a className="nav-link" href="#natijalar" onClick={closeMobileNav}>
            Natijalar
          </a>
          <a className="nav-link" href="#aboutus" onClick={closeMobileNav}>
            Kursimiz haqida
          </a>
          <a className="nav-link" href="#contact" onClick={closeMobileNav}>
            Biz bilan bog'lanish
          </a>
        </nav>

        <div className="mobile-nav-inwrapper">
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
            />
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
            />
          </a>
          <a
            className="header-social__link  bg-red-600"
            href="https://www.youtube.com/@andaluciantm/videos"
            target="blank"
          >
            <img
              className="header-social__img"
              src={Youtube}
              alt="youtube icon"
              width={20}
              height={20}
            />
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
            />
          </a>
        </div>
      </div>

      <header className="header" data-aos="fade-down">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-inwrapper">
              <a className="header-logo" href="https://www.andalucia.uz/">
                Andalucia
              </a>

              {/* Animated burger replaces the burger button */}
              <button
                className={`menu${isMobileNavVisible ? " opened" : ""}`}
                aria-label="Main Menu"
                onClick={toggleMobileNav}
              >
                <svg width="50" height="50" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
              {/* Animated burger replaces the burger button */}

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
                    />
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
                    />
                  </a>
                  <a
                    className="header-social__link  bg-red-600"
                    href="https://www.youtube.com/@andaluciantm/videos"
                    target="blank"
                  >
                    <img
                      className="header-social__img"
                      src={Youtube}
                      alt="youtube icon"
                      width={20}
                      height={20}
                    />
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
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
