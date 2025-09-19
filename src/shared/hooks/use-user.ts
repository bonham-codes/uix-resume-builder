import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '@entities/auth-page/store/user-store';
import { fetch } from '@shared/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string | undefined;
  isVerified: boolean;
  isLoggedIn: boolean;
}

const fetchCurrentUser = async (): Promise<User> => {
  const response = await fetch<User>('auth/me', {
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  });
  return response;
};

export const useUser = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await fetchCurrentUser();
      setUser(user);
      return user;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};