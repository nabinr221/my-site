import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, name, type, required, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-semibold capitalize'>
        {label}:
      </label>
      {type === "text-area" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          name={name}
          required={required}
          rows={4}
          className='w-full mt-1 border-2 outline-none border-gray-300 px-2 p-1 transition-all duration-500 focus:outline-none focus:border-blue-500'
        />
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          name={name}
          required={required}
          className='w-full mt-1 border-2 outline-none border-gray-300 px-2 p-1 transition-all duration-500 focus:outline-none focus:border-blue-500'
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "number", "text-area"])
    .isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default InputField;
