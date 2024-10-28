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
        <NavLink to="">CONTA</NavLink>
        <NavLink to="estatisticas">ESTATISTICAS</NavLink>
        <NavLink to="postar">POSTAR</NavLink>
      </nav>
    </div>
  );
};

export default MenuConta;
