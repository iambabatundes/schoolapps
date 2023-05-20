import React, { useState } from "react";
import "../styles/globals.css";

const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '#009788', '#4baf4f']; // Define more colors here

function ColorPicker({ selectedColor, onSelectColor }) {
  const [showColors, setShowColors] = useState(false);

  const handleColorChange = (newColor) => {
    onSelectColor(newColor);
    setShowColors(false);
  };

  return (
    <div className="modal-heading">
      <label htmlFor="color">Color:</label>
      <div
        id="color-picker"
        className={showColors ? "active" : ""}
        onClick={() => setShowColors(!showColors)}
      >
        <div className="selected-color" style={{ backgroundColor: selectedColor }} />
        {showColors && (
          <div className="color-picker-dropdown">
            {colors.map((color) => (
              <div
                key={color}
                className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
