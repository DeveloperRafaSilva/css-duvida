import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import FormConta from './components/FormConta';
import Login from './components/Login';
import Conta from './components/Conta/Conta';
import Estatisticas from './components/Conta/Estatisticas';
import Postar from './components/Conta/Postar';
import CriarConta from './components/CriarConta';
import RecuperacaodeConta from './components/RecuperacaodeConta';
import MenuConta from './components/Conta/MenuConta';
import { GlobalContext, GlobalStorage } from './GlobalContext';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import FotoItem from './components/FotoItem/FotoItem';
const App = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  if (global && global.logado) {
    const navigate = useNavigate();
    navigate('/conta/conta');
  }

  return (
    <div>
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="formulario/:caminho" element={<FormConta />}>
              <Route path="" element={<Login />} />
              <Route path="criar" element={<CriarConta />} />
              <Route path="recuperar" element={<RecuperacaodeConta />} />
            </Route>
            <Route path="conta/:caminho" element={<MenuConta />}>
              <Route path="" element={<Conta />} />
              <Route path="estatisticas" element={<Estatisticas />} />
              <Route path="postar" element={<Postar />} />
            </Route>
            <Route path="perfil/:usuario" element={<PerfilUsuario />} />
            <Route path="foto/:foto" element={<FotoItem />} />
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
