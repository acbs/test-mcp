import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (cep.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      return;
    }

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
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        placeholder="Digite o CEP (apenas números)"
        maxLength={8}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p className="error">{error}</p>}
      {address && (
        <div className="address">
          <p><strong>CEP:</strong> {address.cep}</p>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
