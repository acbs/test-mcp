import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({});

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (err) {
      console.error(err);
      setAddress({ error: 'Address not found' });
    }
  };

  return (
    <div>
      <h1>CEP Search</h1>
      <input
        type='text'
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder='Enter CEP'
      />
      <button onClick={fetchAddress}>Search</button>
      {address && <div>
        <p><strong>Logradouro:</strong> {address.logradouro}</p>
        <p><strong>Bairro:</strong> {address.bairro}</p>
        <p><strong>Cidade:</strong> {address.localidade}</p>
        <p><strong>Estado:</strong> {address.uf}</p>
      </div>}
    </div>
  );
};

export default App;