import { Link } from "react-router-dom";
import '../Styles/notFound.css';

const NotFound = () => {
    return (
        <>
        <h1>Oops, no hay nada aquí</h1>
        <Link to="/" className="volver">Volver</Link>
        </>
    )
}

export default NotFound;