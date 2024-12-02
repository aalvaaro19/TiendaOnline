import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Login from './components/Login/Login';
import Productos from './components/PaginaRetro/PaginaRetro';
import RegistrarProductos from './components/Forms/RegistrarProducto/RegistrarProductos';
import RegistrarResenia from './components/Forms/RegistrarReseña/RegistrarResenia';
import PaginaFirmadas from './components/PaginaFirmadas/PaginaFirmadas';
import PaginaColaboraciones from './components/PaginaColaboraciones/PaginaColaboraciones';
import ProductoIndividual from './components/ProductoIndividual/ProductoIndividual';
import PaginaCertificacion from './components/PaginaCertificacion/PaginaCertificacion';
import PaginaFavoritos from './components/PaginaFavoritos/PaginaFavoritos';
import PaginaCarrito from './components/PaginaCarrito/PaginaCarrito';

// const routerFran = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div className="App" >
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <PaginaPrincipal />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       },
//       {
//         path: '/registro',
//         element: <Registro />
//       },
//       {
//         path: '/paginaRetro',
//         element: <Productos />
//       },
//       {
//         path: '/registrarProductos',
//         element: <RegistrarProductos />
//       },
//       {
//         path: '/registrarResenia',
//         element: <RegistrarResenia />
//       },
//       {
//         path: '/paginaFirmadas',
//         element: <PaginaFirmadas />
//       },
//       {
//         path: '/paginaColaboraciones',
//         element: <PaginaColaboraciones />
//       }
//     ]
//   }
// ]);

function App() {
  return (
    // <RouterProvider router={routerFran} />
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
            <Route path="/ProductoIndividual" element={<ProductoIndividual/>} />
            <Route path="/PaginaCertificacion" element={<PaginaCertificacion/>} />
            <Route path="/PaginaFavoritos" element={<PaginaFavoritos/>} />
            <Route path="/PaginaCarrito" element={<PaginaCarrito />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
