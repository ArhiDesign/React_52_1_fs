import React from "react";
import "./styles.css";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-container">
      {label && <label htmlFor={name} className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
}

export default Input;