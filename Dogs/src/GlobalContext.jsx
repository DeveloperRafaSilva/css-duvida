import React from 'react';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [usuario, setUsuario] = React.useState(null);
  const [logado, setLogado] = React.useState(false);

  async function userLogin(username, password) {
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      },
    );
    const json = await response.json();
    console.log(json);
    window.localStorage.setItem('token', json.token);
    validarToken();
  }

  async function validarToken() {
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    );
    const json = await response.json();
    console.log(json);
  }

  React.useEffect(() => {
    async function autoLogin() {
      if (window.localStorage.getItem('token')) {
        fetch('https://dogsapi.origamid.dev/json/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
          },
        })
          .then((response) => response.json())
          .then((dados) => {
            console.log('auto', dados);
          });
      }
    }
    autoLogin();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ userLogin, usuario, logado, validarToken }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
