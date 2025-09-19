import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../store/user-store';

interface EmailCheckResponse {
  emailExists?: boolean;
  hasPassword?: boolean;
  socialAccounts?: string[];
}

interface RegisterUserData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface AuthResponse {
  token?: string;
  user?: any;
  message?: string;
}

interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  deleted_at: string | null;
  email: string;
  googleId: string | null;
  linkedInId: string | null;
  firstName: string;
  lastName: string | null;
  password: string;
  isVerified: boolean;
  isLoggedIn: boolean;
}

interface LogoutResponse {
  message: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchUserDetails = async (userId: string): Promise<User> => {
  const response = await fetch(`${BACKEND_URL}/auth/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', 
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  }

  const data = await response.json();
  return data;};

const checkEmailExistsAPI = async (email: string): Promise<EmailCheckResponse> => {
  const response = await fetch(`${BACKEND_URL}/auth/check-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Failed to check email: ${response.statusText}`);
  }

  return await response.json();
};

const verifyOtpAPI = async ({ email, otp }: { email: string; otp: string }): Promise<boolean> => {
  const response = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    throw new Error(`Failed to verify OTP: ${response.statusText}`);
  }

  const data = await response.json();
  return data.success || true;
};

const registerUserAPI = async (userData: RegisterUserData): Promise<AuthResponse> => {
  const response = await fetch(`${BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`Registration failed: ${response.statusText}`);
  }

  return await response.json();
};

const loginUserAPI = async ({ email, password }: { email: string; password: string }): Promise<AuthResponse> => {
  const response = await fetch(`${BACKEND_URL}/auth/email-signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.statusText}`);
  }

  return await response.json();
};

const logoutUserAPI = async (): Promise<LogoutResponse> => {
  const response = await fetch(`${BACKEND_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`Logout failed: ${response.statusText}`);
  }

  return await response.json();
};

export const useCheckEmailExists = () => {
  return useMutation({
    mutationFn: checkEmailExistsAPI,
    onSuccess: (data) => {
      console.log('Email check successful:', data);
    },
    onError: (error) => {
      console.error('Email check failed:', error);
    },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtpAPI,
    onSuccess: (data) => {
      console.log('OTP verified successfully:', data);
    },
    onError: (error) => {
      console.error('OTP verification failed:', error);
    },
  });
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: registerUserAPI,
    onSuccess: (data) => {
      setUser({ ...data.user, token: data.token });
      localStorage.setItem('userId', data.user.id); 
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: loginUserAPI,
    onSuccess: (data) => {
      setUser({ ...data.user, token: data.token });
      localStorage.setItem('userId', data.user.id); 
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const clearUser = useUserStore((state) => state.clearUser);
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUserAPI,
    onSuccess: (data) => {
      localStorage.removeItem('user');
      localStorage.removeItem('linkedin_oauth_state')
      localStorage.removeItem('userId');
      clearUser();
      queryClient.clear();
      router.push('/auth');
    },
    onError: (error) => {
      console.error('Logout failed:', error);
      localStorage.removeItem('linkedin_oauth_state')
      localStorage.removeItem('user');
      localStorage.removeItem('userId');
      clearUser();
      queryClient.clear();
      router.push('/auth');
    },
  });
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return password.length >= 6 && password.length <= 32 && passwordRegex.test(password);
};
