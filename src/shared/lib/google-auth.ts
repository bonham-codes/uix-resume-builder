const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || 'http://localhost:3000/auth/google/callback';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002';

export const getGoogleAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'openid profile email',
    access_type: 'offline',
    prompt: 'consent',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

export const sendAuthCodeToBackend = async (authCode: string) => {
  if (!authCode) {
    throw new Error('Auth code is required');
  }

  try {
    const response = await fetch(`${BACKEND_URL}/auth/google-signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        authCode: authCode,
        redirectUri: REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status} ${response}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error authenticating with backend:', error);

    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error(
        `Cannot connect to backend server at ${BACKEND_URL}. ` +
          `Please make sure your backend server is running on port 3002.`,
      );
    }

    throw error;
  }
};
