import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Formulario from "./Components/Formulario";
import Historial from "./Components/Historial";
import NotFound from "./Components/NotFound";
import './Styles/app.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={<Layout />}
        />
        <Route path="Historial" element={<Historial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

