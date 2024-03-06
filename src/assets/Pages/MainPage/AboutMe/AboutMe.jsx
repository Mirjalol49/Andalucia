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
          <img
            className="aboutme-img"
            src={AbImg}
            alt="about me"
            width={600}
            height={600}
          />
          <div className="aboutme-in-wrapper">
            <h3 className="aboutme-title">Andalucia markazi haqida</h3>
            <p className="aboutme-subtitle">
              {" "}
              Biz oʻquvchilarga oʻz salohiyatlarini toʻliq roʻyobga chiqarishga
              imkon beruvchi yuqori darajadagi, sifatli taʼlimni taqdim etishga
              intilamiz. Bizning oʻquv dasturimiz ijodkorlik, tanqidiy fikrlash
              va fikrlashni rivojlantirish uchun tajribali oʻqituvchilar
              tomonidan puxta ishlab chiqilgan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
