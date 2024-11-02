import React from 'react';
import './MenuConta.css';
import { NavLink, Outlet } from 'react-router-dom';

const MenuConta = () => {
  return (
    <div className="conta-home">
      <div>
        <Outlet />
      </div>
      <nav>
        <div className="navegacao">
          <NavLink to="" end>
            <img src="../../src/assets/feed.svg" alt="Feed icone" />
          </NavLink>
          <NavLink to="estatisticas">
            <img
              src="../../src/assets/estatisticas.svg"
              alt="Estatististicas svg"
            />
          </NavLink>
          <NavLink to="postar">
            <img src="../../src/assets/adicionar.svg" alt="adicionar icone" />
          </NavLink>
          <a href="#">
            {' '}
            <img src="../../src/assets/sair.svg" alt="Logout icone" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MenuConta;
