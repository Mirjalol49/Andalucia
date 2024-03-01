import "./Footer.css";
import SocialIcon from "../../../Images/footericon.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-wrapper">
          <a className="footer-logo" href="andalucia.uz">
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
            <li className="footer-item">
              <a className="footer-nav-link" href="#contact">
                Biz bilan bog'lanish
              </a>
            </li>
          </ul>

          <a className="footer-tel" href="tel:+998332334000">
            +998 33 233 40 00
          </a>
        </div>
        <div className="footer-bottom-wrapper">
          <a
            className="footer-social-link shadow-lg bg-[#0866FF] text-white"
            href="https://www.youtube.com/@andaluciantm/videos"
            target="blank"
          >
            Facebook
          </a>
          <a
            className="footer-social-link text-white shadow-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-red-500"
            href="https://www.instagram.com/andalucia.uz/?igsh=eWVnMmIwczI3anF2"
            target="blank"
          >
            Instagram
          </a>
          <a
            className="footer-social-link shadow-lg text-white bg-red-600"
            href="https://www.youtube.com/@andaluciantm/videos"
            target="blank"
          >
            Youtube
          </a>
          <a
            className="footer-social-link shadow-lg bg-[#229ED9] text-white"
            href="https://t.me/Andalucia_uz"
            target="blank"
          >
            Telegram{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
