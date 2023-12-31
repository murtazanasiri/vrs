import React from "react";

const FormRow = ({ type, name, lableText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lableText || name}
      </label>
      <input type={type} id={name} name={name} className="form-input" />
    </div>
  );
};

export default FormRow;
