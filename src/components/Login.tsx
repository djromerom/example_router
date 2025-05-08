import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  function handleLogin() {
    login();
    navigate('/');
  }

  return <button onClick={handleLogin}>Iniciar sesión</button>;
}

export default Login