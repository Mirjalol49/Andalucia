import Arabic from "../../../Images/ArabicSub.svg";
import Mental from "../../../Images/mentalArifSub.svg";
import Onatili from "../../../Images/onatiliSub.svg";
import Ingliz from "../../../Images/ingliztiliSub.svg";
import Math from "../../../Images/mathSub.svg";
import Turk from "../../../Images/turkishSub.svg";
import Russian from "../../../Images/russianSub.svg";
import Pochemuchka from "../../../Images/pochemuchka.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import SubCard from "../../../reusables/SubjectsCard/SubCard";
import "./Subjects.css";

const Subjects = () => {
  AOS.init();
  return (
    <section id="kurslar" className="subjects-section">
      <div className="container">
        <h2 className="subjects-title">Sizga mos keladigan kursni tanlang</h2>

        <div className="subjects-box" data-aos="fade-up">
          <SubCard
            subImg={Arabic}
            subject={"Arab Tili"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#0BA95B"}
          />

          <SubCard
            subImg={Mental}
            subject={"Mental Arifmetika"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#9163e0"}
          />

          <SubCard
            subImg={Onatili}
            subject={"Ona tili"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#12B5E5"}
          />

          <SubCard
            subImg={Ingliz}
            subject={"Ingliz tili"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#4ec5c1"}
          />

          <SubCard
            subImg={Math}
            subject={"Matematika"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#ED203D"}
          />

          <SubCard
            subImg={Turk}
            subject={"Turk tili"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#FB7428"}
          />

          <SubCard
            subImg={Russian}
            subject={"Rus tili"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#F38BA3"}
          />

          <SubCard
            subImg={Pochemuchka}
            subject={"Pochemuchka"}
            subtitle={`Oq'uvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#FCBA28"}
          />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
