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
      const handleScroll = () => {
        const scrollProgress = emblaApi.scrollProgress();
        console.log("Scroll Progress:", scrollProgress);
      };

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
      <div className="container" data-aos="fade-up">
        <h2 className="results-title">O'quvchilarimizning natijalari</h2>
        <p className="results-subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          exercitationem.
        </p>
        {/* ******************* */}
        <div className="carousel-wrapper">
          <button className="prev-button" onClick={handlePrev}>
            <img src={PrevImg} alt="previous image" width={150} height={150} />
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
                  name={"Mubina A'zamova"}
                  certificate={Mubina}
                  subject={"Arab tili"}
                  listening={59}
                  reading={58}
                  writing={36}
                  speaking={59}
                  overall={53}
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
            <img src={NextImg} alt="next image" width={150} height={150} />
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default Results;
