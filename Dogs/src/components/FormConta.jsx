import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './FormConta.css';
const FormConta = () => {
  return (
    <div className="conteudo-login">
      <div className="imagemConta"></div>
      <nav className="conteudo-dadosCadastrais">
        <Outlet />
      </nav>
    </div>
  );
};

export default FormConta;
