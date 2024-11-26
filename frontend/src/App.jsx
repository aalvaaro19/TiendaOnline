import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Login from './components/Login/Login';
import Productos from './components/PaginaRetro/PaginaRetro';
import RegistrarProductos from './components/Forms/RegistrarProducto/RegistrarProductos';
import RegistrarResenia from './components/Forms/RegistrarReseña/RegistrarResenia';
import PaginaFirmadas from './components/PaginaFirmadas/PaginaFirmadas';
import PaginaColaboraciones from './components/PaginaColaboraciones/PaginaColaboraciones';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="contenedor-principal">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/paginaRetro" element={<Productos />} />
            <Route path="/paginaFirmadas" element={<PaginaFirmadas />} />
            <Route path="/paginaColaboraciones" element={<PaginaColaboraciones />} />
            <Route path="/registrarProductos" element={<RegistrarProductos />} />
            <Route path="/registrarResenia" element={<RegistrarResenia/>} />
          </Routes>
        </div>
      </div>

    </Router>

  );
}

export default App;
