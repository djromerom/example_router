import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

function Home() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  return <div>
    <h2>Bienvenido al Dashboard</h2>
    <button onClick={handleLogout}>Cerrar sesión</button>

    <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  </div>
}

export default Home
