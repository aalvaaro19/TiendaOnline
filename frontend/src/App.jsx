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
import PaginaCertificacion from './components/PaginaCertificacion/PaginaCertificacion';
import BotonComprarProductoIndividual from './components/BotonComprarProductoIndividual/BotonComprarProductoIndividual';
import BotonCarritoProductoIndividual from './components/BotonCarritoProductoIndividual/BotonCarritoProductoIndividual';

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
                {/* SI NO VA paginaCertificacion hay que poner manualmente en el buscador http://localhost:3000/paginaCertificacion */}
            <Route path="/paginaCertificacion" element={<PaginaCertificacion/>} />
            <Route path='/BotonComprarProductoIndividual' element={<BotonComprarProductoIndividual />} />
            <Route path='/BotonCarritoProductoIndividual' element={<BotonCarritoProductoIndividual />} />

          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
