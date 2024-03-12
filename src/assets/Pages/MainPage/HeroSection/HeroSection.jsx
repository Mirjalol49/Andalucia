/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";

import SwiperSlides from "../../../reusables/SwiperSlides/SwiperSlides";

const HeroSection = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);

  useEffect(() => {
    AOS.init();

    // Function to animate counting effect
    const animateCount = (targetValue, setterFunction) => {
      let currentValue = 0;
      const increment = Math.ceil(targetValue / 30); // Adjust the speed by changing the divisor

      const interval = setInterval(() => {
        currentValue += increment;
        setterFunction(currentValue);

        if (currentValue >= targetValue) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval for smoother animation
    };

    // Animate the counts on component mount
    animateCount(800, setStudentsCount);
    animateCount(20, setTeachersCount);
  }, []);

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
                <span className="hero-in__num">{studentsCount}+</span>
                <p className="hero-in__info">O'quvchilar</p>
              </li>
              <li>
                <span className="hero-in__num">{teachersCount}+</span>
                <p className="hero-in__info">O'qituvchilar</p>
              </li>
            </ul>

            <a className="course-btn" href="#contact">
              Darsga Yozilish
            </a>
          </div>

          <SwiperSlides />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
