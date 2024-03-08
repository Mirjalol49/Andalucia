/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import ResultsCard from "../../../reusables/Results/ResultsCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PrevImg from "../../../Images/prev.svg";
import NextImg from "../../../Images/next.svg";

//!Certificates Images import
import Dildora from "../../../Images/certificateDildora.png";
import Ogiloy from "../../../Images/ogiloy.jpg";
import Mubina from "../../../Images/mubina.jpg";
import Hanifa from "../../../Images/hanifa.jpg";
import Shaxodat from "../../../Images/shaxodat.jpg";
import Malika from "../../../Images/malika.jpg";
import Ezoza from "../../../Images/ezoza.jpg";
import Umida from "../../../Images/umida.jpg";

// AOS ANIMATION IMPORT
import "aos/dist/aos.css";

import "./Results.css";

const Results = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      const handleScroll = () => {};

      emblaApi.on("scroll", handleScroll);

      return () => emblaApi.off("scroll", handleScroll);
    }
  }, [emblaApi]);

  const handlePrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <section id="natijalar" className="results-section">
      <svg
        viewBox="0 0 1268 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-41 116.5C-41 116.5 -13 144.194 42 137.5C137.685 125.854 159.556 75.8412 254.548 59.6627C341.629 44.8314 384.5 128.213 478.35 93.7384C528 75.4999 530 9.93731 623.309 11C758.5 12.5396 759.5 258.276 913.14 224.497C1014 202.323 1020.5 115.251 1079.59 93.7384C1193.37 52.3182 1273.34 196.541 1386.05 152.44"
          stroke="#8F7DE8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 10"
        ></path>
        <path
          d="M-41 104.5C-41 104.5 4.762 131.18 35 127.5C130.685 115.854 159.556 64.8413 254.548 48.6627C341.629 33.8314 399.231 120.232 478.35 81.7384C523.352 59.8436 524.32 2.00029 622.309 2C774.613 1.99955 768.355 260.875 924.14 210.497C999.71 186.06 1005 108.893 1079.59 81.7384C1193.37 40.3183 1272.34 182.541 1385.05 138.44"
          stroke="#77F6AA"
          strokeWidth="3"
        ></path>
      </svg>
      <div className="container">
        <h2 className="results-title">O'quvchilarimizning natijalari</h2>

        {/* ******************* */}
        <div className="carousel-wrapper">
          <button className="prev-button" onClick={handlePrev}>
            <img src={PrevImg} alt="previous image" width={300} height={300} />
          </button>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"O'g'iloy Axmedova "}
                  certificate={Ogiloy}
                  subject={"Arab tili"}
                  listening={51}
                  reading={53}
                  writing={40}
                  speaking={63}
                  overall={52}
                />
              </div>
              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"Dildora Xisamedinov"}
                  certificate={Dildora}
                  subject={"Arab tili"}
                  listening={51}
                  reading={45}
                  writing={56}
                  speaking={99}
                  overall={51}
                />
              </div>

              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"Hanifa Karimberdiyeva"}
                  certificate={Hanifa}
                  subject={"Arab tili"}
                  listening={61}
                  reading={51}
                  writing={49}
                  speaking={65}
                  overall={56.5}
                />
              </div>
              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"Shaxodat Baxtiyorova"}
                  certificate={Shaxodat}
                  subject={"Arab tili"}
                  listening={61}
                  reading={56}
                  writing={61}
                  speaking={64}
                  overall={60.5}
                />
              </div>
              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"Umida Samigova"}
                  certificate={Umida}
                  subject={"Arab tili"}
                  listening={54}
                  reading={57}
                  writing={45}
                  speaking={64}
                  overall={55}
                />
              </div>
              <div className="embla__slide">
                <ResultsCard
                  badge={"B1"}
                  name={"Malika Farxodova"}
                  certificate={Malika}
                  subject={"Arab tili"}
                  listening={45}
                  reading={46}
                  writing={33}
                  speaking={47}
                  overall={42.75}
                />
              </div>

              <div className="embla__slide">
                <ResultsCard
                  badge={"B2"}
                  name={"E'zoza Anvarova"}
                  certificate={Ezoza}
                  subject={"Arab tili"}
                  listening={46}
                  reading={51}
                  writing={61}
                  speaking={65}
                  overall={55.75}
                />
              </div>
            </div>
          </div>
          <button className="next-button" onClick={handleNext}>
            <img src={NextImg} alt="next image" width={300} height={300} />
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default Results;
