// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BegzodT from "../../Images/BegzodT.png";
import IqboldT from "../../Images/IqbolT.png";
import NaziraT from "../../Images/NaziraT.png";
import MathT from "../../Images/MathT.png";
import Rating from "../../Images/rating.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperSlides.css";
// import required modules
import { EffectCards } from "swiper/modules";

export default function SwiperSlides() {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="swiper-img"
            src={BegzodT}
            alt="teacher"
            width={300}
            height={300}
          />

          <div className="hero-slide-txt-wrapper mt-5">
            <p className="hero-slide-text">Begzod Bakirov</p>
            <p className="text-2xl">CEO</p>
            <img
              className=" rating-hero my-2"
              src={Rating}
              alt="rating stars"
              width={110}
              height={50}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <img
            className="swiper-img"
            src={NaziraT}
            alt="teacher"
            width={300}
            height={300}
          />
          <div className="hero-slide-txt-wrapper">
            <p className="hero-slide-text">Nazira</p>
            <p className="text-2xl">Ingliz tili - C1</p>
            <img
              className="my-2 rating-hero"
              src={Rating}
              alt="rating stars"
              width={110}
              height={50}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-img"
            src={IqboldT}
            alt="teacher"
            width={300}
            height={300}
          />
          <div className="hero-slide-txt-wrapper">
            <p className="hero-slide-text">Muhammad Iqbol</p>
            <p className="text-2xl">Arab tili - C1</p>
            <img
              className="my-2 rating-hero"
              src={Rating}
              alt="rating stars"
              width={110}
              height={50}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="swiper-img"
            src={MathT}
            alt="teacher"
            width={300}
            height={300}
          />
          <div className="hero-slide-txt-wrapper">
            <p className="hero-slide-text">Zebuniso Faxriddinovna</p>
            <p className="text-2xl">Matematika</p>
            <img
              className="my-2 rating-hero"
              src={Rating}
              alt="rating stars"
              width={110}
              height={50}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
