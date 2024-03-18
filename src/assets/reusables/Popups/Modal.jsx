import { useState } from "react";
import "./Modal.css"; // Import your CSS file for styling

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-container">
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <>
          <div className="overlay" onClick={handleCloseModal}></div>
          <dialog className="modal" open>
            <button className="close-button" onClick={toggleModal}>
              Close
            </button>
            <div className="modal-content">
              <h2>This is a beautiful modal!</h2>
              <p>You can put any content here.</p>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default Modal;
