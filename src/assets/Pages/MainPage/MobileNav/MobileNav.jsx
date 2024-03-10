/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Facebook from "../../../Images/facebook.svg";
import Youtube from "../../../Images/youtube.svg";
import Instagram from "../../../Images/instagram.svg";
import Telegram from "../../../Images/telegram.svg";
import X from "../../../Images/x.svg";
import "./Mobile.css";

const MobileNav = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Call the onClose function to handle additional actions if needed
  };

  return isVisible ? (
    <div className="mobile-wrapper">
      <button className="burgerX-btn" onClick={handleClose}>
        <img src={X} alt="x" width={40} height={40} />
      </button>
      <nav className="mobile-nav">
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
  ) : null;
};

export default MobileNav;
