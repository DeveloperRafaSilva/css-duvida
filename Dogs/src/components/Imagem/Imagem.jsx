import React from 'react';
import './Imagem.css';

const Imagem = ({ alt, src }) => {
  const [squeleto, setEsqueleto] = React.useState(true);
  function handleload({ target }) {
    target.style.opacity = 1;
    setEsqueleto(false);
  }
  return (
    <div className="container">
      {squeleto && <div className="esqueleto"></div>}
      <img onLoad={handleload} className="imagem" src={src} alt={alt} />
    </div>
  );
};

export default Imagem;
