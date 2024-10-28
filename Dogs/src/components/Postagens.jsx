import React from 'react';
import './Postagens.css';
import UseFecth from '../UseFecth';
import Modal from './ModalPost/Modal';
const Postagens = () => {
  const { dados, loading, error, request } = UseFecth();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    request('https://dogsapi.origamid.dev/json/api/photo');
  }, [request]);

  const [modal, setModal] = React.useState(false);
  function handleClick(post) {
    setPost(post);
  }

  function handleClikc(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
      document.body.style.background = 'initial';
    } else {
      document.body.style.background = '#333';
      setModal(true);
    }
  }

  if (dados === null) return null;
  return (
    <div onClick={handleClikc} className="div-pai">
      <div className="postagens-dogs">
        {dados.map((dogs) => (
          <div
            key={dogs.id}
            onClick={() => handleClick(dogs)}
            className="item-dogs"
          >
            <div className="divv-post">
              <img src={dogs.src} title={dogs.title} />
              <span className="acessos">{dogs.acessos}</span>
            </div>
          </div>
        ))}
        {modal && <Modal post={post} modal={modal} setModal={setModal} />}
      </div>
    </div>
  );
};

export default Postagens;
