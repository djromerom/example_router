import { Link, useNavigate } from "react-router-dom";

function About() {

    const productos:string[] = ["Escritorios", "Sillas", "Sofas", "Reclinables"];
    const navigate = useNavigate();

    function handleLogin(producto:string) {
        // lógica de autenticación...
        navigate('/product/'+ producto);
    }

    return (<div>
        <h2>Acerca de nuestros productos</h2>
        <h3>Productos</h3>
        <ul>
            {productos.map(producto => (
                <li key={producto}>
                    <button onClick={() => handleLogin(producto)}>{producto}</button>
                    <Link to={`/product/${producto}`}>{producto}</Link>
                </li>
            ))}
        </ul>
    </div>)
}

export default About
