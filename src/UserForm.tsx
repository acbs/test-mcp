import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Nome é obrigatório';
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    if (!phone) newErrors.phone = 'Telefone é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, email, phone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;