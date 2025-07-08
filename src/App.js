import React, { useState } from 'react';

const App = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const fetchAddress = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <div>
      <h1>Buscador de CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={fetchAddress}>Buscar</button>
      {address && (
        <div>
          <h2>Endereço:</h2>
          <p>{address.logradouro}, {address.bairro}, {address.localidade} - {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default App;