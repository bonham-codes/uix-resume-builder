import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetch } from "@shared/api";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  isVerified: boolean;
  isLoggedIn: boolean;
}

interface AuthCheckResponse {
  message: string;
  user: User;
}

const fetchAuthCheck = async (): Promise<User> => {
  const response = await fetch<AuthCheckResponse>("auth/check", {
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  });
  return response.user;
};

const fetchUserProfile = async (): Promise<User> => {
  return await fetch<User>("auth/me", {
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  });
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchAuthCheck,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCachedUser = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<User>(["userProfile"]);
};