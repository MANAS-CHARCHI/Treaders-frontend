import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleLoginButton() {
  const handleLogin = async (credentialResponse) => {
    const googleToken = credentialResponse.credential;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/auth/google/",
        {
          token: googleToken,
        }
      );

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      alert("Login Successful!");
    } catch (error) {
      console.error("Google login failed:", error.response?.data || error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => console.log("Login Failed")}
    />
  );
}
