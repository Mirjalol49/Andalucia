import Arabic from "../../../Images/ArabicSub.svg";
import Mental from "../../../Images/mentalArifSub.svg";
import Onatili from "../../../Images/onatiliSub.svg";
import Ingliz from "../../../Images/ingliztiliSub.svg";
import Math from "../../../Images/mathSub.svg";
import Turk from "../../../Images/turkishSub.svg";
import Russian from "../../../Images/russianSub.svg";
import Pochemuchka from "../../../Images/pochemuchka.svg";

import SubCard from "../../../reusables/SubjectsCard/SubCard";
import "./Subjects.css";

const Subjects = () => {
  return (
    <section className="subjects-section">
      <div className="container">
        <h2 className="subjects-title">Sizga most keladigan kursni tanlang</h2>
        <div className="subjects-box">
          <SubCard
            subImg={Arabic}
            subject={"Arab Tili"}
            subtitle={"bu fan eng zor fan"}
            bgGradient="bgGradient1"
          />

          <SubCard
            subImg={Mental}
            subject={"Mental Arifmetika"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient2"}
          />

          <SubCard
            subImg={Onatili}
            subject={"Ona tili"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient3"}
          />

          <SubCard
            subImg={Ingliz}
            subject={"Ingliz tili"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient4"}
          />

          <SubCard
            subImg={Math}
            subject={"Matematika"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient5"}
          />

          <SubCard
            subImg={Turk}
            subject={"Turk tili"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient6"}
          />

          <SubCard
            subImg={Russian}
            subject={"Rus tili"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient7"}
          />

          <SubCard
            subImg={Pochemuchka}
            subject={"Pochemuchka"}
            subtitle={"bu eng zor fan"}
            bgGradient={"bgGradient8"}
          />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
