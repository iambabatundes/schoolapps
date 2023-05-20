import React from "react";
import "./modal.module.css";

function ModalForm({
  handleTitleChange,
  title,
  description,
  handleDescriptionChange,
  handleColorChange,
  color,
  handleAddActivity,
  closeModal
}) {
  return (
    <section>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="color">Color:</label>
        <select id="color" value={color} onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
        </select>
      </div>
      <button onClick={handleAddActivity}>Add</button>
      <button onClick={closeModal}>Cancel</button>
    </section>
  );
}

export default ModalForm;
