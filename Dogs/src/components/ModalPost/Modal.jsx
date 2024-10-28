import React from 'react';
import './modal.css';
import Titulo from '../Titulo';
import Comentarios from '../Comentarios/Comentarios';

const Modal = (dados) => {
  if (!dados.modal) return null;
  return (
    <>
      <div className="feed-modal" key={dados.id}>
        <div className="foto-dogs">
          <img src={dados.post.src} title={dados.post.title} />
        </div>
        <div className="conteudo-modal">
          <div className="header-modal">
            <p className="author">@{dados.post.author}</p>
            <p className="acessos-modal">{dados.post.acessos}</p>
          </div>
          <div className="infos-dog">
            <Titulo conteudo={dados.post.title} />
            <div className="dogs-infos-item">
              <p>| {dados.post.peso} kg</p>
              <p>| {dados.post.idade} anos</p>
            </div>
          </div>
          <div className="comentarios">
            <Comentarios id={dados.post.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
