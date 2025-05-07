import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  
    function handleLogin() {
      localStorage.setItem("auth", "true");
      navigate("/");
    }
  
    return <button onClick={handleLogin}>Iniciar sesión</button>;
  }

  export default Login