import React from 'react';
import Titulo from './Titulo';
import Input from './inputs/Input';
import './criar.css';
import Button from './Button/Button';
const CriarConta = () => {
  return (
    <div className="criar-conta">
      <Titulo conteudo="Criar conta" />
      <form action="post">
        <Input
          type="text"
          required
          name="usuario"
          id="usuario"
          text="Usuário"
        />
        <Input type="email" required name="email" id="email" text="Email" />
        <Input type="password" required name="senha" id="senha" text="senha" />
        <Button texto="Cadastrar" />
      </form>
    </div>
  );
};

export default CriarConta;
