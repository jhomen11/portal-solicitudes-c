import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/Layout";
import Tramites from "./pages/Tramites";
import { AppProvaider } from "./context/AppProvaider";
import FormDatosUsuario from "./pages/FormDatosUsuario";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppProvaider>
          <Routes>
            {/* Rutas Publicas */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Tramites />} />
              <Route path="form-datos-usuario" element={<FormDatosUsuario/>}/>
            </Route>
          </Routes>
        </AppProvaider>
      </BrowserRouter>
    </div>
  );
}

export default App;
