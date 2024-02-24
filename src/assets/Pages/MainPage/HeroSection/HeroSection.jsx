/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import Arrow from "../../../Images/arrow.svg";

const HeroSection = () => {
  AOS.init();
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-start-wrapper">
            <h1 className="hero-start__title">
              Sifatli ta'lim orqali porloq kelajak sari
            </h1>
            <ul className="hero-in-list">
              <li className="hero-in-item">
                <span className="hero-in__num">800+</span>
                <p className="hero-in__info">O'quvchilar</p>
              </li>
              <li>
                <span className="hero-in__num">20+</span>
                <p className="hero-in__info">O'qituvchilar</p>
              </li>
            </ul>
            <a className="hero-btn" href="#contact">
              Darsga yozilish
              <img className="hero-right-arrow" src={Arrow} alt="right arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
