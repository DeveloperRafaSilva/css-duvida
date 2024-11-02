import React from 'react';
import './Comentarios.css';
import useFetch from '../../UseFecth';
import { GlobalContext } from '../../GlobalContext';

const Comentarios = ({ id }) => {
  const { dados, error, request, loading } = useFetch();
  const [coment, setComentario] = React.useState('');
  const [dadosDois, setDadosDois] = React.useState([]);
  const gloabal = React.useContext(GlobalContext);
  React.useEffect(() => {
    fetch(`https://dogsapi.origamid.dev/json/api/comment/${id}`)
      .then((response) => response.json())
      .then((dadosComentario) => {
        setDadosDois(dadosComentario);
      });
  }, [id, dados]);

  console.log(gloabal);

  function postarComentario() {
    request(`https://dogsapi.origamid.dev/json/api/comment/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify({
        comment: coment,
      }),
    });
  }

  if (dadosDois) {
    return (
      <>
        {dadosDois.map((comentario) => (
          <div key={comentario.user_id} className="comentario">
            <div className="comentario-item">
              <p className="autor-comentario">{comentario.comment_author}:</p>
              <p className="autor-conteudo">{comentario.comment_content}</p>
            </div>
          </div>
        ))}
        {gloabal.logado && (
          <div className="comentario-post">
            <input
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
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Comentarios;
