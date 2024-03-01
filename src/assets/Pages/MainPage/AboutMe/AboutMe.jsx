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
          <img className="aboutme-img" src={AbImg} alt="abimg" />
          <div className="aboutme-end-wrapper">
            <h2 className="aboutme-title">Andalucia markazi haqida</h2>
            <p className="aboutme-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              ratione tempora, possimus distinctio, officiis placeat esse
              asperiores sed, veritatis maiores maxime labore facere! Vero,
              eligendi fugiat inventore molestias dolore quas.
            </p>
            <div className="aboutme-imgbox">
              <img className="aboutme-in-img" src={AbImg} alt="JUST img" />
              <img className="aboutme-in-img" src={AbImg} alt="JUST img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
