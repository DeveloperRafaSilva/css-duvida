import React from 'react';
import './Postar.css';
import Titulo from '../Titulo';
import Input from '../inputs/Input';
import Button from '../Button/Button';
const Postar = () => {
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState(null);
  const [imagemTela, setImagemTela] = React.useState(null);

  function postar(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados);
      });
  }

  React.useEffect(() => {
    console.log(img);
    if (img) {
      setImagemTela(URL.createObjectURL(img));
    }
  }, [img]);

  return (
    <div className="titulo-conta">
      <Titulo conteudo="Postar foto" />
      <div className="formulario-postar">
        <form action="post">
          <Input type="text" id="nome" text="Nome" setEvent={setNome} />
          <Input type="text" id="peso" text="peso" setEvent={setPeso} />
          <Input type="text" id="idade" text="idade" setEvent={setIdade} />
          <input
            type="file"
            text="idade"
            id="idade"
            onChange={({ target }) => setImg(target.files[0])}
          />
          <Button teste={postar} texto="POSTAR" id />
        </form>
      </div>
    </div>
  );
};

export default Postar;
