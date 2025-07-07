import { useEffect } from 'react';
import { useAuthStore } from '../stores/useAuthStore';

export const useAuth = () => {
  const { isAuthenticated } = useAuthStore();
  useEffect(() => {
    // Logic to check authentication status
  }, [isAuthenticated]);
};