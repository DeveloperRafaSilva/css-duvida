import React from 'react';
import './Button.css';
const Button = ({ texto, teste }) => {
  return (
    <button onClick={teste} className="botao">
      {texto}
    </button>
  );
};

export default Button;
