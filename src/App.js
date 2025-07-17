import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(response.data);
        setError('');
      }
    } catch (err) {
      setError('Erro ao buscar o CEP');
      setAddress(null);
    }
  };

  return (
    <div className="App">
      <h1>Buscador de CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p className="error">{error}</p>}
      {address && (
        <div className="address">
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
