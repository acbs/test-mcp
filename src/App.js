import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error('Error fetching the address:', error);
      alert('Erro ao buscar endereço. Verifique o CEP e tente novamente.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Buscar de CEP</h2>
      <input type='text' value={cep} onChange={handleChange} placeholder='Digite o CEP' />
      <button onClick={handleSearch}>Buscar</button>

      {address && (
        <div style={{ marginTop: '20px' }}>
          <h3>Dados do Endereço:</h3>
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
