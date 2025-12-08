import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleLoginButton from "./GoogleLoginButton";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ padding: "50px" }}>
        <h1>React + Django Google Login</h1>
        <GoogleLoginButton />
      </div>
    </>
  );
}

export default App;
