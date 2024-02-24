/* eslint-disable react/no-unescaped-entities */
import WhyChooseCards from "../../../reusables/WhyChooseCards/WhyChooseCards";
import Date from "../../../Images/date.svg";
import Teacher from "../../../Images/teachers.svg";
import Achievement from "../../../Images/achievement.svg";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="why-choose-title">
          Nima uchun aynan bizni tanlashingiz kerak?
        </h2>
        <p className="why-choose-text">
          Talabalarimizning har biri quyidagi afzalliklarga ega bo'ladi
        </p>
        <div className="why-choose-cards-wrapper">
          <WhyChooseCards
            cardImg={Date}
            title={"Biz tajribalimiz"}
            paragraph={"4 yildan ortiq O’zbekiston bozorida tajribaga egamiz"}
          />
          <WhyChooseCards
            cardImg={Teacher}
            title={"Tajribali ustozlar"}
            paragraph={
              "Bizda Attanal va CEFR dan darajasi C1 gacha bo’lgan ustozlar bor"
            }
          />

          <WhyChooseCards
            cardImg={Achievement}
            title={"Bizning yutuqlar"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
