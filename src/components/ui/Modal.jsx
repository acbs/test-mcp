import React from 'react';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>{children}</div>;
};

export default Modal;