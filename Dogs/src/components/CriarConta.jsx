import React from 'react';
import Titulo from './Titulo';
import Input from './inputs/Input';
import './criar.css';
import { GlobalContext } from '../GlobalContext';
import Button from './Button/Button';
const CriarConta = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [usuario, setUsuario] = React.useState('');

  function teste(event) {
    console.log(usuario);
    event.preventDefault();
    global.userPostar(usuario, senha, email);
  }

  return (
    <div className="criar-conta">
      {senha}
      <Titulo conteudo="Criar conta" />
      <form action="post">
        <Input
          type="text"
          required
          name="usuario"
          id="usuario"
          text="Usuário"
          setEvent={setUsuario}
        />
        <Input
          setEvent={setEmail}
          type="email"
          required
          name="email"
          id="email"
          text="Email"
        />
        <Input
          setEvent={setSenha}
          type="password"
          required
          name="senha"
          id="senha"
          text="senha"
        />
        <Button teste={teste} texto="Cadastrar" />
      </form>
    </div>
  );
};

export default CriarConta;
