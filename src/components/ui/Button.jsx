import React from 'react';

const Button = ({ text, onClick }) => {
  return <button className='bg-blue-500 text-white p-2' onClick={onClick}>{text}</button>;
};

export default Button;