import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../schemas/authSchemas';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(loginSchema)});

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <input {...register('password')} />
      {errors.email && <span>Email is required</span>}
      {errors.password && <span>Password is required</span>}
      <button type='submit'>Login</button>
    </form>
  );
}
