/* eslint-disable react/prop-types */
import "./WhyChooseCards.css";

const WhyChooseCards = ({ cardImg, title, paragraph }) => {
  return (
    <div className="why-cards-wrapper">
      <img className="why-cards-img" src={cardImg} alt="cardimg" />
      <h3 className="why-cards-title">{title}</h3>
      <p className="why-cards-text">{paragraph}</p>
    </div>
  );
};

export default WhyChooseCards;
