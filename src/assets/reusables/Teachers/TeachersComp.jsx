/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import "./TeachersComp.css";

const TeachersComp = ({
  bgCol,
  img,
  name,
  subject,
  ModalName,
  ModalAbout,
  ModalText,
  id,
}) => {
  const modalId = `my_modal_${id}`; // Generate unique modal id

  return (
    <div className="teacher-card" style={{ backgroundColor: bgCol }}>
      <div className="teacher-img-wrapper">
        <img className="w-52 ob" src={img} alt="teacher-img" />
      </div>
      <div className="teacher-subcard">
        <h3 className="teacher-subcard-title text-[#151118] font-bold">
          {name}
        </h3>
        <p className=" teacher-subcard-text  text-[#151118] font-semibold">
          {subject}
        </p>
        <button
          className="teacher-card-btn"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          Ko'proq...
        </button>
        {/* modal */}
        <dialog id={modalId} className="modal w-full">
          <div className="modal-box bg-[#F9F4DA] border-4 border-solid border-black w-full">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-0 mb-3">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">{ModalName}</h3>
            <p className="py-4">{ModalAbout}</p>
            <p className="py-4">{ModalText}</p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TeachersComp;
