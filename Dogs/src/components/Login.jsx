import React from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Titulo from './Titulo';
import Input from './inputs/Input';
import Button from './Button/Button';
import { GlobalContext } from '../GlobalContext';
import useFetch from '../UseFecth';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const { dados, error, loading, request } = useFetch();
  const navigate = useNavigate();
  const global = React.useContext(GlobalContext);

  function teste(event) {
    event.preventDefault();
    global.userLogin(email, senha);
  }

  return (
    <div>
      <Titulo conteudo="Login" />
      <div className="formulario">
        <form action="post">
          <div>
            <Input
              type="text"
              required
              name="email"
              id="email"
              text="Usuário"
              setEvent={setEmail}
            />
            {email}
          </div>
          <div>
            <Input
              type="password"
              required
              name="senha"
              id="senha"
              text="Senha"
              setEvent={setSenha}
            />
          </div>
          {dados && dados.data && dados.data.status === 403 && (
            <p style={{ color: 'red', margin: '1rem 0' }}>dados incorretos</p>
          )}
          <Button teste={teste} texto="ENTRAR" />
        </form>
      </div>
      <div className="perdeu-a-senha">
        <NavLink to="recuperar">
          <p>Perdeu a senha?</p>
        </NavLink>
        <div className="detalhe"></div>
      </div>
      <div className="cadastrese">
        <div className="titulo-cadastro">
          <h1>CADASTRE-SE</h1>
        </div>
        <div className="conteudo-cadastro">
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <NavLink to="criar">
            <Button texto="Cadastro" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
