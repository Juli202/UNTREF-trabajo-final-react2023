import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import '../Styles/formulario.css';

const Formulario = () => {
  const [historial, sethistorial] = useState(() => {
    let storage = localStorage.getItem("Historial");
    if (storage) return JSON.parse(storage);
    localStorage.setItem("historial", JSON.stringify([]));
    return [];
  });

  const [load, setLoad] = useState(false);
  const [menu, setMenu] = useState([]);
  const [evento, setEvento] = useState([]);
  const [menuSeleccionado, setMenuSeleccionado] = useState(null);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [invitados, setInvitados] = useState(20);
  const [total, setTotal] = useState();
  const [cotizacionGuardada, setCotizacionGuardada] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((datos) => {
        setMenu(datos.filter(({ type }) => type === "menu"));
        setEvento(datos.filter(({ type }) => type === "evento"));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  useEffect(() => localStorage.setItem("historial", JSON.stringify(historial)), [historial]);

  const cotizar = (e) => {
    e.preventDefault();
    setCotizacionGuardada(false);
    if ( menuSeleccionado == null || eventoSeleccionado == null || invitados <= 0) {
       return Swal.fire("", "Completá todos los datos", "error");
    }
    setLoad(true);
    setTimeout(() => {
      if (menuSeleccionado && eventoSeleccionado) {
        const menuCostoPersona = menu.find(({ id }) => id === parseInt(menuSeleccionado)).costoPersona;
        const eventoCostoPersona = evento.find(({ id }) => id === parseInt(eventoSeleccionado)).costoPersona;

        const costoTotal = (menuCostoPersona + eventoCostoPersona) * invitados;
        setTotal(costoTotal);
        console.log("Costo Total:", costoTotal);
      } else {
        console.log("Por favor, selecciona un menú y un evento antes de cotizar.");
      }
      setLoad(false);
      e.target.reset();
    }, 3000);
    e.target.reset();
  };

  const guardar = () => {
    const nuevoElemento = {
        fecha: new Date().toLocaleDateString("es-mx"),
        hora: new Date().toLocaleTimeString("es-mx"),
        menu: menu.find(({ id }) => id == menuSeleccionado),
        evento: evento.find(({ id }) => id == eventoSeleccionado),
        invitados: invitados,
        total: total,
    };

    const existeEnHistorial = historial.some(
        (elemento) =>
            elemento.menu.id === nuevoElemento.menu.id &&
            elemento.evento.id === nuevoElemento.evento.id &&
            elemento.invitados === nuevoElemento.invitados
    );

    if (existeEnHistorial) {
      Swal.fire("", "Ya guardaste este presupuesto anteriormente", "warning");
    } else {
      sethistorial([...historial, nuevoElemento]);
      localStorage.setItem("Historial", JSON.stringify([...historial, nuevoElemento]));
      Swal.fire("", "Historial actualizado", "success");
      setCotizacionGuardada(true);
    }
};

  return (
    <>
      {load &&(
        <>
        <div className="loader">
          </div>
        </>
      )}
      {!load && (
        <section>
        <form onSubmit={cotizar} className="formulario">
        <h4>Completá los siguientes campos y obtendras tu presupuesto para una experiencia inolvidable!</h4>
          <fieldset>
            <label htmlFor="menu">Menú</label>
            <select
              name="menu"
              id="menu"
              value={menuSeleccionado || 0}
              onChange={({ target }) => setMenuSeleccionado(target.value)}
            >
              <option value={0} disabled>
                Selecciona un menú
              </option>
              {menu.map(({ id, title }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="evento">Evento</label>
            <select
              name="evento"
              id="evento"
              value={eventoSeleccionado || 0}
              onChange={({ target }) => setEventoSeleccionado(target.value)}
            >
              <option value={0} disabled>
                Selecciona un evento
              </option>
              {evento.map(({ id, title }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="invitados">
            <label htmlFor="invitados">Invitados</label>
            <input
              type="range"
              name="invitados"
              id="invitados"
              min={20}
              max={500}
              value={invitados}
              onChange={({ target }) => setInvitados(target.value)}
            />
            <span>{invitados}</span>
          </fieldset>
          <button type="submit">Cotizar</button>
          {total && !cotizacionGuardada && (
              <div>
                <h2>Total: {total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</h2>
                <button type="button" onClick={guardar}>
                  Guardar
                </button>
              </div>
            )}
        </form>
        </section>
      )}
    </>
  );
};

export default Formulario;
