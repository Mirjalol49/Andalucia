/* eslint-disable react/prop-types */
import "./SubCard.css";
import Rating from "../../Images/rating.png";

const SubCard = ({ subImg, subject, subtitle, bg }) => {
  return (
    <div className="sub-card" style={{ backgroundColor: bg }}>
      <img className="sub-img" src={subImg} alt={subject} />
      <h3 className="sub-title">{subject}</h3>
      <img className="mb-4" src={Rating} alt="rating" width={110} height={50} />
      <p className="sub-subtitle">{subtitle}</p>
      <a className="cssbuttons-io-button" href="#contact">
        Darsga yozilish
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default SubCard;
