import React from 'react';

const useFetch = () => {
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [js, setJs] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setJs(js);
      if (response.ok === false) throw new Error(json.message);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
      setDados(json);
      return { response, json };
    }
  }, []);

  return { dados, loading, error, request, js };
};

export default useFetch;
