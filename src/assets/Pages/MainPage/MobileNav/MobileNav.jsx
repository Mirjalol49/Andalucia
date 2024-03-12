/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Facebook from "../../../Images/facebook.svg";
import Youtube from "../../../Images/youtube.svg";
import Instagram from "../../../Images/instagram.svg";
import Telegram from "../../../Images/telegram.svg";
import X from "../../../Images/x.svg";
import "./Mobile.css";

const MobileNav = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Call the onClose function to handle additional actions if needed
  };

  return isVisible ? (
  
  ) : null;
};

export default MobileNav;
