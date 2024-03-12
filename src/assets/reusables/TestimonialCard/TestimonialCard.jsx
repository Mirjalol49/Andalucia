/* eslint-disable react/prop-types */
import "./TestimonialCard.css";
import Rating from "../../Images/rating.png";
const TestimonialCard = ({ nameTitle, thought, bg, TextBg }) => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-top-wrapper" style={{ backgroundColor: bg }}>
        <h3 className="testimonial-title">{nameTitle}</h3>
        <img
          className="rating-testimonial"
          src={Rating}
          alt="rating img"
          width={120}
          height={100}
        />
      </div>
      <p className="testimonial-text" style={{ backgroundColor: TextBg }}>
        {thought}
      </p>
    </div>
  );
};

export default TestimonialCard;
