import React from 'react';
import './FotoItem.css';
import UseFetch from '../../UseFecth';
import { NavLink, useParams } from 'react-router-dom';
import Titulo from '../Titulo';
import Loading from '../Loading/Loading';

const FotoItem = () => {
  const { dados, error, loading, request } = UseFetch();
  const [comentario, setComentario] = React.useState();
  const { foto } = useParams();

  React.useEffect(() => {
    request(`https://dogsapi.origamid.dev/json/api/photo/${foto}`);
  }, [foto]);

  function postarComentario() {
    if (dados) {
      request(
        `https://dogsapi.origamid.dev/json/api/comment/${dados.photo.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
          },
          body: JSON.stringify({
            comment: comentario,
          }),
        },
      );
    }
  }
  if (loading) return <Loading />;
  if (dados && dados.photo) {
    return (
      <div key={dados.photo.id} className="conteudo-foto-item">
        <img src={dados.photo.src} alt={dados.photo.title} />
        <div className="infos-dog-user">
          <NavLink to={`/perfil/${dados.photo.author}`}>
            <p>@{dados.photo.author}</p>
          </NavLink>
          <span>{dados.photo.acessos}</span>
        </div>
        <div className="infos-gerais-dog">
          <Titulo conteudo={dados.photo.title} />
          <div className="caracteristicas-dog">
            <p>| {dados.photo.peso} Kg</p>
            <p>| {dados.photo.idade} Anos</p>
          </div>
        </div>
        {dados &&
          dados.comments.map((comentario) => (
            <div key={comentario.comment_ID} className="comentario-item">
              <p>{comentario.comment_author}: </p>
              <span>{comentario.comment_content}</span>
            </div>
          ))}
        <div className="comentario-post">
          <input
            className="input-comentario"
            type="text"
            id="comentario"
            placeholder="Digite seu comentário"
            onChange={({ target }) => setComentario(target.value)}
          />
          <img
            onClick={postarComentario}
            src="../../../src/assets/enviar.svg"
            alt=""
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default FotoItem;
