import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Login from './components/Login/Login';
import Productos from './components/PaginaRetro/PaginaRetro';
import PaginaFirmadas from './components/PaginaFirmadas/PaginaFirmadas';
import PaginaColaboraciones from './components/PaginaColaboraciones/PaginaColaboraciones';
import PaginaCertificacion from './components/PaginaCertificacion/PaginaCertificacion';
import PaginaCarrito from './components/PaginaCarrito/PaginaCarrito';
import PaginaPago from './components/PaginaPago/PaginaPago';
import ProductoIndividual from './components/ProductoIndividual/ProductoIndividual';
import PaginaFavoritos from './components/PaginaFavoritos/PaginaFavoritos';
import Admin from './components/ZonaAdmin/Admin';
import ListarUsuarios from './components/ZonaAdmin/Usuario/ListarUsuarios';
import CrearUsuario from './components/ZonaAdmin/Usuario/CrearUsuario';
import ListarProductos from './components/ZonaAdmin/Productos/ListarProductos';
import RegistrarProductos from './components/ZonaAdmin/Productos/RegistrarProductos';
import ListarResenias from './components/ZonaAdmin/Reseñas/ListarReseñas';
import CrearResenia from './components/ZonaAdmin/Reseñas/CrearReseña';

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
            <Route path="/paginaCertificacion" element={<PaginaCertificacion/>} />
            <Route path='/PaginaCarrito' element={<PaginaCarrito />} />
            <Route path='/PaginaPago' element={<PaginaPago />} />
            <Route path="/ProductoIndividual/:idProducto" element={<ProductoIndividual />} />
            <Route path="/PaginaFavoritos" element={<PaginaFavoritos/>} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/usuarios/listar' element={<ListarUsuarios />} />
            <Route path='/admin/usuarios/crear' element={<CrearUsuario />} />
            <Route path='/admin/usuarios/actualizar/:idUsuario' element={<CrearUsuario />} />
            <Route path='/admin/productos/listar' element={<ListarProductos />} />
            <Route path='/admin/productos/crear' element={<RegistrarProductos />} />
            <Route path='/admin/productos/actualizar/:idProducto' element={<RegistrarProductos />} />
            <Route path='/admin/resenias/listar' element={<ListarResenias />} />
            <Route path='/admin/resenias/crear' element={<CrearResenia />} />
            <Route path='/admin/resenias/actualizar/:idResenia' element={<CrearResenia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
