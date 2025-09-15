interface EmailCheckResponse {
  emailExists?: boolean;
  hasPassword?: boolean;
  socialAccounts?: string[];
}

export const checkEmailExists = async (
  email: string
): Promise<EmailCheckResponse> => {
  try {
    const response = await fetch("http://localhost:3002/auth/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return { emailExists: false };
  } catch (error) {
    console.error("Error checking email:", error);
    return { emailExists: false };
  }
};

export const verifyOtp = async (
  email: string,
  otp: string
): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3002/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("OTP verified successfully:", data);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
};

export const registerUser = async (userData: {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3002/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("User registered successfully:", data);
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error registering user:", error);
    return false;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3002/auth/email-signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return (
    password.length >= 6 &&
    password.length <= 32 &&
    passwordRegex.test(password)
  );
};