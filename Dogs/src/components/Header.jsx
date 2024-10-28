import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
const Header = () => {
  const global = React.useContext(GlobalContext);
  // console.log(global.usuario);
  return (
    <header className="header">
      <div className="container-header">
        <Link to="/">
          <div className="container">
            <img src="../src/assets/dogs.svg" alt="Icone Dogs" />
          </div>
        </Link>
        <div className="btnLogin">
          {global.logado ? (
            <p>{global.usuario}</p>
          ) : (
            <NavLink to="formulario/login">
              <h3>Login / Criar</h3>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
