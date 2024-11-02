import React from 'react';
import './Postagens.css';
import UseFecth from '../UseFecth';
import Modal from './ModalPost/Modal';
import Imagem from './Imagem/Imagem';
import Loading from './Loading/Loading';
const Postagens = () => {
  const { dados, loading, error, request } = UseFecth();
  const [dados2, setDados] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    request('https://dogsapi.origamid.dev/json/api/photo');
  }, [request]);

  function handleClick(post) {
    setDados(post);
    setModal(true);
  }

  if (loading) return <Loading />;
  if (dados === null) return null;
  return (
    <div className="div-pai">
      <div className="postagens-dogs">
        {dados.map((dogs) => (
          <div
            key={dogs.id}
            onClick={() => handleClick(dogs)}
            className="item-dogs"
          >
            <div className="divv-post">
              <Imagem src={dogs.src} title={dogs.title} />
              <span className="acessos">{dogs.acessos}</span>
            </div>
          </div>
        ))}
        {modal && <Modal dados={dados2} modal={modal} setModal={setModal} />}
      </div>
    </div>
  );
};

export default Postagens;
