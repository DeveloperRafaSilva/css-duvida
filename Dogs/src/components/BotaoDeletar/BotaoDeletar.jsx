import React from 'react';
import './BotaoDeletar.css';
const BotaoDeletar = ({ setEvent }) => {
  return (
    <button onClick={setEvent} className="deletar">
      DELETAR
    </button>
  );
};

export default BotaoDeletar;
