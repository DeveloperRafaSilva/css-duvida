import React from 'react';
import './Comentarios.css';
import useFetch from '../../UseFecth';

const Comentarios = ({ id }) => {
  const { dados, error, request, loading } = useFetch();

  React.useEffect(() => {
    request(`https://dogsapi.origamid.dev/json/api/comment/${id}`);
  }, [id]);

  if (dados === null) return null;
  return (
    <>
      {dados.map((comentario) => (
        <div key={comentario.user_id} className="comentario-item">
          <p className="autor-comentario">{comentario.comment_author}:</p>
          <p className="autor-conteudo">{comentario.comment_content}</p>
        </div>
      ))}
    </>
  );
};

export default Comentarios;
