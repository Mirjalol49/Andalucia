/* eslint-disable react/prop-types */
import "./TestimonialCard.css";
const TestimonialCard = ({ nameTitle, thought }) => {
  return (
    <div className="testimonial-wrapper">
      <h3 className="testimonial-title">{nameTitle}</h3>
      <p className="testimonial-text">{thought}</p>
    </div>
  );
};

export default TestimonialCard;
