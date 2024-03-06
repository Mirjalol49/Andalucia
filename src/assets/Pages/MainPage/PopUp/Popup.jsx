/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import "./Popup.css";
const Popup = () => {
  const [popupClosed, setPopupClosed] = useState(false);

  const closePopup = () => {
    const popupPrompt = document.querySelector(".popup-prompt");
    const popupContainer = document.querySelector(".popup-container");

    popupPrompt.classList.remove("popup-prompt--show");

    setTimeout(() => {
      popupContainer.classList.remove("popup-container--show");
      setPopupClosed(true);
    }, 200);
  };

  useEffect(() => {
    const popupContainer = document.querySelector(".popup-container");
    const popupPrompt = document.querySelector(".popup-prompt");

    const showPopup = () => {
      if (
        popupContainer.style.display === "" &&
        !popupClosed &&
        !popupContainer.classList.contains("popup-container--show")
      ) {
        popupContainer.classList.add("popup-container--show");
        setTimeout(() => {
          popupPrompt.classList.add("popup-prompt--show");
        }, 1000);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const percentage = Math.round(
        (scrollTop * 100) / (docHeight - winHeight)
      );

      if (percentage >= 70 && percentage <= 100) {
        showPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupClosed]);

  return (
    <div className="popup-container">
      <div className="popup">
        <img
          className="popup__illustration"
          src="https://frontendor.com/Popup/illustration.png"
          alt="Popup Illustration"
        />
        <div className="popup__prompt popup-prompt">
          <p className="popup-prompt__text">Kursga yozdiring tezroq...✍️</p>
          <div className="popup-prompt__footer">
            <button onClick={closePopup} className="popup-prompt__cancel-btn">
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="popup-prompt__confirm-btn"
              >
                Xo'p 😊
              </a>
            </button>
          </div>
          <svg
            className="popup-prompt__tail"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47.645 65.664"
          >
            <path
              d="M-732.027,1721.712s-31.75,2.7-47.1-23.279c-.149-.252-.348-.6-.544-.949s4.251,33.712,33.232,52.045c.638.274,4.763,2.371,5.419,2.686,8.411,3.559,8.988,10.931,8.988,10.931Z"
              transform="translate(779.673 -1697.48)"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Popup;
