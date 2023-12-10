import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/historial.css';

const Historial = () => {
    const [historial, setHistorial] = useState(() => {
        let storage = localStorage.getItem("Historial");
        if (storage) return JSON.parse(storage);
        localStorage.setItem("Historial", JSON.stringify([]));
        return [];
    });

    useEffect(() => {
        console.log("Historial:", historial);
    }, [historial]);

    const guardarEnHistorial = (nuevoElemento) => {
        const existeEnHistorial = historial.some(
            (elemento) =>
                elemento.menu.id === nuevoElemento.menu.id &&
                elemento.evento.id === nuevoElemento.evento.id &&
                elemento.invitados === nuevoElemento.invitados
        );
    
        if (!existeEnHistorial) {
            setHistorial([...historial, nuevoElemento]);
            localStorage.setItem("Historial", JSON.stringify([...historial, nuevoElemento]));
        }
    };
    

    return (
        <>
            <header>
                <h1>HISTORIAL</h1>
            </header>
            {historial.length > 0 ? (
                <ul>
                    {historial.map((elemento, index) => (
                        <li key={index}>
                            <p>Fecha: {elemento.fecha}</p>
                            <p>Menu: {elemento.menu.title}</p> 
                            <p>Evento: {elemento.evento.title}</p> 
                            <p>Invitados: {elemento.invitados}</p>
                            <p>Total: {elemento.total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="historial-vacio">
                    <p>No has guardado ningún presupuesto</p>
                    <img src="/src/assets/sad.svg" alt="sad emoji" className="sad-emoji" />
                </div>
            )}
            <Link to="/">
                <button type="button" className="volver-historial">Volver</button>
            </Link>
        </>
    );
}

export default Historial;



