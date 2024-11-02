import React from 'react';
import './Graficos.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const Graficos = ({ dados }) => {
  const [grafico, setGrafico] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (dados) {
      setTotal(
        dados.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
      );
    }
  }, [dados]);

  React.useEffect(() => {
    if (dados) {
      const graficoData = dados.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });
      setGrafico(graficoData);
    }
  }, [dados]);

  console.log(total);
  console.log('garfico', dados);

  if (dados)
    return (
      <>
        <div>
          <div className="acessos-div">
            <p className="acessosTotal">Total de acessos:</p>
            <p>{total}</p>
          </div>
          <div className="victori">
            <VictoryPie data={grafico} />
          </div>
        </div>
      </>
    );
};

export default Graficos;
