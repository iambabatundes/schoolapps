import React from "react";
import style from "./modal.module.css";
import ModalHeading from "./modalHeader";
import ModalForm from "./modalForm";

function CalendarModal({
  onClose,
  onOpen,
  isOpen,
  title,
  description,
  handleAddActivity,
  handleColorChange,
  handleDescriptionChange,
  handleTitleChange,
}) {
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className={style.modal} onClick={onClose} isOpen={isOpen}>
      <div className="modal-container">
        <div className="modal-content" onClick={handleFormClick}>
          <ModalHeading title="Add Events" />
          <ModalForm
            title={title}
            description={description}
            handleAddActivity={handleAddActivity}
            handleColorChange={handleColorChange}
            handleDescriptionChange={handleDescriptionChange}
            handleTitleChange={handleTitleChange}
          />
        </div>

        {/* <ModalFooter
          onClick={handleFormClick}
          subtitle="Not a member yet?"
          link="Join now"
          onOpen={onOpen}
        /> */}
      </div>
    </section>
  );
}

export default CalendarModal;
