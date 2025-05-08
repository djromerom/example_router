import { useNavigate } from 'react-router-dom';
import '../styles/Logout.css';
export default function Logout() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("auth");
        navigate("/login");
    }

    return (
        <button className='logout-button' onClick={handleLogout}>
            Logout
        </button>
    );
}