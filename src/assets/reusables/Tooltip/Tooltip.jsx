/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Tooltip.css"; // Import your CSS file for styling

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-container text-red-600 text-5xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <div className="tooltip text-red-600">{text}</div>}
    </div>
  );
};

export default Tooltip;
