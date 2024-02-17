/* eslint-disable react/prop-types */
import "./SubCard.css";
const SubCard = ({ subImg, subject, subtitle, bgGradient }) => {
  return (
    <div className={`sub-card ${bgGradient}`}>
      <img className="sub-img" src={subImg} alt={subject} />
      <h3 className="sub-title">{subject}</h3>
      <p className="sub-subtitle">{subtitle}</p>
      <a className="sub-btn" href="#contact">
        Darsga yozilish
      </a>
    </div>
  );
};

export default SubCard;
