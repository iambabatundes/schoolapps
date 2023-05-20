import React from "react";
import "./modal.module.css"

function ModalHeading({ title }) {
  return (
    <section>
      <h5 className="modal-title">{title}</h5>
    </section>
  );
}

export default ModalHeading;
