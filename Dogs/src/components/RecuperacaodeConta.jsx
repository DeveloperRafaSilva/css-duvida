import React from 'react';
import Titulo from './Titulo';
import Input from './inputs/Input';
import './RecuperacaodeConta.css';
import Button from './Button/Button';

const RecuperacaodeConta = () => {
  return (
    <div className="formulario-recuperar">
      <Titulo conteudo="Perdeu s senha" />
      <Input text="Usuário / email" name="conta" type="email" id="Conta" />
      <Button texto="ENVIAR EMAIL" />
    </div>
  );
};

export default RecuperacaodeConta;
