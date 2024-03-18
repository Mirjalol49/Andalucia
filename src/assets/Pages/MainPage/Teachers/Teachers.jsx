/* eslint-disable react/no-unescaped-entities */
import "./Teachers.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import TeachersComp from "../../../reusables/Teachers/TeachersComp";
import TPrev from "../../../Images/tprev.svg";
import TNext from "../../../Images/tnext.svg";
import IqbolT from "../../../Images/iqbol.jpg";
import Zebunisso from "../../../Images/Zebiniso.jpg";
import Zulfiya from "../../../Images/Zulfiya.jpg";
import Aziza from "../../../Images/aziza.jpg";

const Teachers = () => {
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
    <section className="teachers">
      <div className="container">
        <h2 className="teachers-title">Bizning O'qituvchilar</h2>
        <div className="teacher-carousel-wrapper">
          <button className="mr-3" onClick={handlePrev}>
            <img src={TPrev} width={80} height={80} alt="prev button" />
          </button>
          <div className="teacher-embla" ref={emblaRef}>
            <div className="teacher-embla__container">
              <div className="teacher-embla__slide">
                <TeachersComp
                  img={IqbolT}
                  bgCol={"#0BA95B"}
                  name={"Muhammad Iqbol"}
                  subject={"Arab tili"}
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Zebunisso}
                  bgCol={"#12B5E5"}
                  name={"Zebunisso"}
                  subject={"Matematika"}
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Zulfiya}
                  bgCol={"#EB203D"}
                  name={"Zulfiya"}
                  subject={"Ingliz tili"}
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Aziza}
                  bgCol={"#FC7428"}
                  name={"Aziza"}
                  subject={"Arab tili"}
                />
              </div>
            </div>
          </div>
          <button className="ml-3" onClick={handleNext}>
            <img src={TNext} width={80} height={80} alt="next button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
