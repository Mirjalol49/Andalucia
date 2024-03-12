/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./ResultsCard.css";
import Badge from "../../Images/badge.svg";

const ResultsCard = ({
  badge,
  name,
  certificate,
  subject,
  listening,
  reading,
  writing,
  speaking,
  overall,
}) => {
  return (
    <div className="results-card">
      <div className="results-top-wrapper">
        <p className="results-top-badge">
          {badge} <img className="results-badge-img" src={Badge} alt="badge" />{" "}
        </p>
        <p className="results-top-name">{name}</p>
      </div>
      <div className="results-bottom-wrapper">
        <img
          className="results-bottom-ctf"
          src={certificate}
          alt="dildora certificate"
          width={170}
          height={"auto"}
        />
        <div className="results-subject-wrapper">
          <p className="results-subject-subname">{subject}</p>

          <div className="results-subject-in-wrapper">
            <p className="results-subject-stacks">Tinglab tushunish</p>
            <p className="results-subject-score">{listening} ball</p>
          </div>
          <div className="results-subject-in-wrapper">
            <p className="results-subject-stacks">O'qish</p>
            <p className="results-subject-score">{reading} ball</p>
          </div>
          <div className="results-subject-in-wrapper">
            <p className="results-subject-stacks">Yozish</p>
            <p className="results-subject-score">{writing} ball</p>
          </div>
          <div className="results-subject-in-wrapper results-border">
            <p className="results-subject-stacks">Gapirish</p>
            <p className="results-subject-score">{speaking} ball</p>
          </div>
          <div className="results-subject-in-wrapper">
            <p className="results-subject-overall">Umumiy ball</p>
            <p className="results-subject-overall-score">{overall} ball</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
