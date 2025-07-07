import { apiClient } from './apiClient';

export const getUser = async (id) => {
  const res = await apiClient.get(`/users/${id}`);
  return res.data;
};