/* eslint-disable react/no-unescaped-entities */
import "./Footer.css";
import FooterBg from "../../../Images/FooterBg.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-wrapper">
          <a className="footer-logo" href="https://www.andalucia.uz/">
            Andalucia
          </a>

          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-nav-link" href="#kurslar">
                Kurslar
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-nav-link" href="#natijalar">
                Natijalar
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-nav-link" href="#aboutus">
                Kursimiz haqida
              </a>
            </li>
          </ul>

          <a className="footer-tel" href="tel:+998332334000">
            +998 33 233 40 00
          </a>
        </div>
        <div className="footer-owner">
          © 2024-
          <a href="https://t.me/mirjalol_shamsiddinov" target="blank">
            Mirjalol Shamsiddinov
          </a>
        </div>
      </div>
      <div className="footer-bg">
        <img className="footer-img" src={FooterBg} alt="footer background" />
      </div>
    </footer>
  );
};

export default Footer;
