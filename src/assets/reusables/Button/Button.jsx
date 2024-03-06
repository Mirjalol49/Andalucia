/* eslint-disable react/prop-types */
import "./Button.css";
const Button = ({ sourse, text, margin }) => {
  return (
    <button type="submit" style={{ margin: margin }}>
      <a className="button-1" href={sourse}>
        <span className="button-1-shadow"></span>
        <span className="button-1-edge"></span>
        <div className="button-1-front text">{text}</div>
      </a>
    </button>
  );
};

export default Button;
