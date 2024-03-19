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
import Nazira from "../../../Images/Nazira.jpg";

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
                  bgCol={"#667FAB"}
                  name={"Muhammad Iqbol"}
                  subject={"Arab tili"}
                  id={1}
                  ModalName={"Tojimatov Iqboljon Qayumjon o'g'li"}
                  ModalAbout={
                    "O'zbekiston xalqaro islom akademiyasining Islomshunoslik yo'nalishiga o'qishga kirgan va hozirgi kunda 4-kursni tamomlamoqda. BAAning Sharjah amirligida 1 yil atrofida malaka oshirib kelgan, arab tilidan C1 sertifikatga ega, oilali..."
                  }
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Zebunisso}
                  bgCol={"#ED203D"}
                  name={"Zebunisso"}
                  subject={"Matematika"}
                  id={2}
                  ModalName={"Abdurashidova Zebunisso Faxriddin Qizi"}
                  ModalAbout={`Magistr darajasiga ega, Andalucia o'quv markazida 2 yildan ortiq muddatdan beri matematika o'qituvchisi bo'lib ishlab kelmoqda. Oilali, bir qizi bor.. Bakalavr
    Начало обучения -2012 Окончание -2016 Учебное заведение   УзМУ Факультет   физика`}
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Zulfiya}
                  bgCol={"#0BA95B"}
                  name={"Zulfiya"}
                  subject={"Ingliz tili"}
                  id={3}
                  ModalName={"Davronova Zulfiya Alisherovna"}
                  ModalAbout={
                    "O‘zbekiston davlat jahon tillari universiteti uqib kelmoqda, IELTS dan 7 darajaga ega, markazimizda 1 yildan ortiqroq muddatda ishlab kelmoqda."
                  }
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Aziza}
                  bgCol={"#12B5E5"}
                  name={"Aziza"}
                  subject={"Arab tili"}
                  id={4}
                  ModalName={"Muxsimova Aziza Shoaxror qizi"}
                  ModalAbout={
                    "O‘zbekiston Xalqaro Islom Akademiyasi da bakalavr darajada o'qishni tamomlagan, va aynan shu universitetda magistiraturada o'qib kelmoqda, Arab tilidan CEFR dan C1 darajaga ega."
                  }
                />
              </div>

              <div className="teacher-embla__slide">
                <TeachersComp
                  img={Nazira}
                  bgCol={"#FC7428"}
                  name={"Nazira"}
                  subject={"Ingliz tili"}
                  id={5}
                  ModalName={"Nazira Xodjaraxmonova"}
                  ModalAbout={`Hozirda ilmiy ish bilan shug'ullanyapman. Ilmiy ishimning asosiy mavzusi
      raqamlashtirish jarayoni bilan bog'liq. 2022 yilda men davlat egasi bo'ldim
      Navoiy nomidagi stipendiya sohibi bo‘lib, magistraturaga imtihonsiz kirish imkoniyatiga ega bo‘ldi
      grant asosida. Tillarni o'rganishga bo'lgan katta qiziqishim tufayli men harakat qildim
      ingliz tilini mukammal o'rgandi va IELTS imtihonida 7 ball to'plashga muvaffaq bo'ldi. IN
      Hozirda turk va nemis tillarini o‘rganyapman va asosiy maqsadlarimdan biri shu
      kelajakda bu tillarni mukammal o'rganing. bularni uzbek tiliga tarjima qilib quysak.`}
                  ModalText={`Ta’lim 2024 Toshkent moliya instituti 4-kursni tamomlamoqda, soha Byudjet hisobi va g‘aznachilik, Byudjet nazorati va g‘aznachiligi.

Tillarni bilishi
  O'zbek - mahalliy
Ingliz tili - C1 - Kengaytirilgan
Nemis tili - A1 - boshlang'ich
Rus tili - C1 - Kengaytirilgan
Turkcha - B1 - O'rta`}
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
