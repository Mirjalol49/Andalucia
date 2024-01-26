import HeroBg from "../../../Images/herobg.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="conatiner">
      <section className="hero-section">
        <div className="hero-start-wrapper">
          <h1 className="hero-title">
            ANDALUCIA O'QUV MARKAZIGA XUSH KELIBSIZ, SIZNING{" "}
            <span className="hero-intitle">
              <span className="hero-text-title">YORQIN</span>
            </span>{" "}
            KELAJAGINGIZ SHU YERDAN BOSHLANADI
          </h1>
          <a className="hero-btn" href="#link">
            Birinchi darsga yozilish
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
