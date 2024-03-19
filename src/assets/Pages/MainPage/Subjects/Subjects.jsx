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
            subtitle={`O'quvchilarimiz qisqa mudatda CEFR imtixonida kamida B2 sertifikat olishadi.`}
            bg={"#0BA95B"}
          />

          <SubCard
            subImg={Mental}
            subject={"Mental Arifmetika"}
            subtitle={`Farzandingiz aqliy salohiyatini va tezkorligini oshiradi bu fan orqali.`}
            bg={"#9163e0"}
          />

          <SubCard
            subImg={Onatili}
            subject={"Ona tili"}
            subtitle={`Bu fan orqali o'z ona tilingiz yana da chuqurroq o'rganasiz va universitetga ham tayyorlaymiz.`}
            bg={"#12B5E5"}
          />

          <SubCard
            subImg={Ingliz}
            subject={"Ingliz tili"}
            subtitle={`Ustozlarimiz juda tajribali shuning uchun qisqa muddatda gaplashishni boshlashadi va IELTS va CEFR dan ham yaxshigina ball olishadi.`}
            bg={"#4ec5c1"}
          />

          <SubCard
            subImg={Math}
            subject={"Matematika"}
            subtitle={`Maktabda matematika fanidan birinchilardan bo'lishni yoki universitetga topshirish uchun tayyorlaymiz.`}
            bg={"#ED203D"}
          />

          <SubCard
            subImg={Turk}
            subject={"Turk tili"}
            subtitle={`Turk tilidan CEFR yokida o'z ishingiz uchun o'rganishingiz mumkin va bemalol ravon gaplasha olasiz.`}
            bg={"#FB7428"}
          />

          <SubCard
            subImg={Russian}
            subject={"Rus tili"}
            subtitle={`Rus tili da bemalol ravon gaplashishni istasangiz hoziroq kursga yoziling. `}
            bg={"#F38BA3"}
          />

          <SubCard
            subImg={Pochemuchka}
            subject={"Pochemuchka"}
            subtitle={`Farzandingizni maktabda birinchilardan bo'lishini istasangiz kursga hoziroq yozdiring, o'qish yozish, hisoblash hammsi o'rgatiladi.`}
            bg={"#FCBA28"}
          />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
