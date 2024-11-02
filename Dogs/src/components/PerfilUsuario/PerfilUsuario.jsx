import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../../UseFecth';
import './PerfilUsuario.css';
import Modal from '../ModalPost/Modal';
import Titulo from '../Titulo';
import Loading from '../Loading/Loading';

const PerfilUsuario = () => {
  const { usuario } = useParams();
  const { dados, error, loading, request } = UseFetch();
  const [modal, setModal] = React.useState(false);
  const [dadosPost, setDadosPost] = React.useState(false);
  React.useEffect(() => {
    request(
      `https://dogsapi.origamid.dev/json/api/photo/?_total=9&_page=1&_user=${usuario}`,
    );
  }, [usuario]);

  function abrirModal(dados) {
    setDadosPost(dados);
    setModal(true);
  }

  if (loading) return <Loading />;
  if (dados) {
    return (
      <div className="postagem-usuario">
        <Titulo conteudo={usuario} />
        <div className="container-post-user">
          {dados.map((postagem) => (
            <div key={postagem.id} className="postagem-item">
              <img
                onClick={() => abrirModal(postagem)}
                src={postagem.src}
                title={postagem.title}
              />
            </div>
          ))}
        </div>
        {modal && <Modal dados={dadosPost} setModal={setModal} />}
      </div>
    );
  } else {
    return null;
  }
};

export default PerfilUsuario;
