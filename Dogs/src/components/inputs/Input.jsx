import React from 'react';
import './input.css';

const Input = ({ type, required, text, id, setEvent }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        className="input"
        name={id}
        id={id}
        type={type}
        required={required}
        onChange={(event) => setEvent(event.target.value)}
      />
    </>
  );
};

export default Input;
