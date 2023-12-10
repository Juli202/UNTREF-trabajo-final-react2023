import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Layout from "./Components/Layout";
import Formulario from "./Components/Formulario";
import Historial from "./Components/Historial";
import NotFound from "./Components/NotFound";
import './Styles/app.css';

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
         <Layout />
        }>
        <Route index element={<Formulario />}/>
        </Route>
        <Route path="Historial" element={<Historial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;