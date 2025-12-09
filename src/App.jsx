import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthSuccess from "./AuthSuccess";
import Dashboard from "./Dashboard";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
