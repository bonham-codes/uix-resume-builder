const LINKEDIN_CLIENT_ID = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID!;
const REDIRECT_URI =
  process.env.NEXT_PUBLIC_REDIRECT_URI ||
  "http://localhost:3000/auth/linkedin/callback";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3002";

export const getLinkedInAuthUrl = () => {
  const state = Math.random().toString(36).substring(2, 15);
  localStorage.setItem("linkedin_oauth_state", state);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: "openid profile email",
    state: state,
  });

  return `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;

};

export const sendAuthCodeToBackend = async (authCode: string) => {
  if (!authCode) {
    throw new Error("Auth code is required");
  }

  try {
    const response = await fetch(`${BACKEND_URL}/auth/linkedin-signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
    console.error("Error authenticating with backend:", error);

    if (
      error instanceof TypeError &&
      error.message.includes("Failed to fetch")
    ) {
      throw new Error(
        `Cannot connect to backend server at ${BACKEND_URL}. ` +
          `Please make sure your backend server is running on port 3002.`
      );
    }

    throw error;
  }
};
