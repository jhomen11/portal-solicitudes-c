import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/Layout";
import Tramites from "./pages/Tramites";
import { AppProvaider } from "./context/AppProvaider";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AppProvaider>
          <Routes>
            {/* Rutas Publicas */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Tramites />} />
            </Route>
          </Routes>
        </AppProvaider>
      </BrowserRouter>
    </div>
  );
}

export default App;
