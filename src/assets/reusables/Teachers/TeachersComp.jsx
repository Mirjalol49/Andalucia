/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TeachersComp.css"; // Import your CSS file for styling

const TeachersComp = ({ bgCol, img, name, subject }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    // Prevent scrolling when the modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    // Restore scrolling when the modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <div className="teacher-card" style={{ backgroundColor: bgCol }}>
      <div className="teacher-img-wrapper">
        <img className="w-52 ob" src={img} alt="teacher-img" />
      </div>
      <div className="teacher-subcard">
        <h3 className="text-3xl text-[#151118] font-bold">{name}</h3>
        <p className="text-2xl text-[#151118] font-semibold">{subject}</p>
        <button className="teacher-card-btn" onClick={openModal}>
          Ko'proq...
        </button>
        {modalOpen && (
          <div className="overlay">
            <div className="modal">
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
              <div className="modal-content">
                <h2>This is a beautiful modal!</h2>
                <p>You can put any content here.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachersComp;
