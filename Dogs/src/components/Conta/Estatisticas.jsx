import React from 'react';
import './Estatisticas.css';
import Titulo from '../Titulo';
import usefetch from '../../UseFecth';
import Graficos from './Graficos';
import './Estatisticas.css';
const Estatisticas = () => {
  const { dados, error, request, loading } = usefetch();

  React.useEffect(() => {
    request('https://dogsapi.origamid.dev/json/api/stats', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    });
  }, [request]);
  console.log(dados);

  return (
    <div className="titulo-conta">
      <Titulo conteudo="Estatisticas" />
      <div className="estatisticas">
        <Graficos dados={dados} />
      </div>
    </div>
  );
};

export default Estatisticas;
