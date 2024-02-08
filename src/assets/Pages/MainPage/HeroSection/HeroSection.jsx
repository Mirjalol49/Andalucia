/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import Cloud from "../../../Images/cloud.png";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <img className="cloud" src={Cloud} alt="cloud" />
        <h1 className="hero-section__title">
          Kelajagingiz uchun eshikni oching
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
