import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP.');
      setAddress(null);
    }
  };

  return (
    <div>
      <h1>Buscador de CEP</h1>
      <input
        type='text'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder='Digite o CEP'
      />
      <button onClick={fetchAddress}>Buscar</button>
      {address && (<div>
        <h2>Endereço:</h2>
        <p>{address.logradouro}, {address.bairro}</p>
        <p>{address.localidade} - {address.uf}</p>
        <p>{address.cep}</p>
      </div>)}
    </div>
  );
};

export default App;