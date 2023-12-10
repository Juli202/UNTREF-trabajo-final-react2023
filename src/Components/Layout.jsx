import { Link, Outlet } from "react-router-dom";
import '../Styles/layout.css';


const Layout = () => {
    return(
        <>
            <header>
             <h1>COTIZÁ TU CATERING</h1>
              <Link to="/Historial" title="Ver Historial" className="history">
              <span>📋</span>
              </Link>
             </header>
            <Outlet />
        </>
    );
};

export default Layout;