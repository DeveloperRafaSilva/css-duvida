import React from 'react';
import './modal.css';
import Titulo from '../Titulo';
import { GlobalContext } from '../../GlobalContext';
import BotaoDeletar from '../BotaoDeletar/BotaoDeletar';
import { NavLink } from 'react-router-dom';
import Comentarios from '../Comentarios/Comentarios';
import useFetch from '../../UseFecth';
import Imagem from '../Imagem/Imagem';
import Loading from '../Loading/Loading';

const Modal = ({ dados, setModal }) => {
  const { data, request, loadin, error } = useFetch();
  const global = React.useContext(GlobalContext);
  console.log(global);
  function fecharModal(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  function deletarFoto(idDelete) {
    const confirmar = window.confirm('Deseja excluir a foto?');
    if (confirmar === true) {
      request(`https://dogsapi.origamid.dev/json/api/photo/${idDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      });
    }
  }

  if (loadin) return <Loading />;
  if (dados) {
    return (
      <div onClick={fecharModal} className="container-modal">
        <div className="post-conteudo">
          <div className="imagem-img">
            <Imagem src={dados.src} alt={dados.title} />
          </div>
          <div className="conteudo-post-main">
            <div className="">
              {global.usuario === dados.author ? (
                <div className="header-post">
                  <BotaoDeletar setEvent={() => deletarFoto(dados.id)} />
                  <span>{dados.acessos}</span>
                </div>
              ) : (
                <div className="header-post">
                  {window.location.href ===
                  'http://localhost:5173/perfil/cat' ? (
                    <p>@{dados.author}</p>
                  ) : (
                    <NavLink to={`perfil/${dados.author}`}>
                      <p>@{dados.author}</p>
                    </NavLink>
                  )}
                  <span>{dados.acessos}</span>
                </div>
              )}
            </div>
            <div className="conteudo-dogs">
              <NavLink to={`/foto/${dados.id}`}>
                <Titulo conteudo={dados.title} />
              </NavLink>
              <div className="infos-dog">
                <span>|{dados.peso} Kg</span>
                <span>|{dados.idade} Anos</span>
              </div>
              <Comentarios id={dados.id} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
