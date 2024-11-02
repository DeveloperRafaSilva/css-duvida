import React from 'react';
import './Conta.css';
import Titulo from '../Titulo';
import UseFetch from '../../UseFecth';
import { GlobalContext } from '../../GlobalContext';
import Modal from '../ModalPost/Modal';
import Loading from '../Loading/Loading';

const Conta = () => {
  const { dados, error, loading, request } = UseFetch();
  const [modal, setModal] = React.useState(true);
  const [dadosModal, setDadosModal] = React.useState(null);
  const global = React.useContext(GlobalContext);
  React.useEffect(() => {
    request(
      `https://dogsapi.origamid.dev/json/api/photo/?_total=9&_page=1&_user=${global.usuario}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    );
  }, [request]);

  function abrirModal(postagem) {
    setModal(true);
    setDadosModal(postagem);
  }

  if (loading) return <Loading />;

  return (
    <div className="titulo-conta">
      <Titulo conteudo="Minha Conta" />
      <div className="fotos">
        {dados &&
          dados.map((postagem) => (
            <div key={postagem.id} className="post-foto-item">
              <img
                onClick={() => abrirModal(postagem)}
                src={postagem.src}
                title={postagem.title}
                id="bg"
                className="conteudo-post"
              />
              <span>{postagem.acessos}</span>
            </div>
          ))}
        {modal && <Modal dados={dadosModal} setModal={setModal} />}
      </div>
    </div>
  );
};

export default Conta;
