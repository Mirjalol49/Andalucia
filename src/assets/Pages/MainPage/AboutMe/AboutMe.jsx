import AbImg from "../../../Images/aboutimg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";
const AboutMe = () => {
  AOS.init();
  return (
    <section className="aboutme-section" id="aboutus">
      <div className="container">
        <div className="aboutme-wrapper" data-aos="fade-up">
          <img className="aboutme-img" src={AbImg} alt="about me" />
          <div className="aboutme-in-wrapper">
            <h3 className="aboutme-title">Andalucia markazi haqida</h3>
            <p className="aboutme-subtitle">
              {" "}
              Biz oʻquvchilarga yuqori darajadagi, sifatli taʼlimni taqdim
              etishga intilamiz. Arab tili kursimiz tajribali oʻqituvchilar
              tomonidan ishlab chiqilgan boʻlib, ijodkorlik va tanqidiy
              fikrlashni rivojlantirishga yordam beradi. Arab tili darslarimiz
              orqali oʻquvchilar grammatikani, lug'at boyligini va nutq
              madaniyatini o'rganadilar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
