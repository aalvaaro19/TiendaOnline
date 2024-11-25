import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Login from './components/Login/Login';
import RegistrarProductos from './components/Forms/RegistrarProducto/RegistrarProductos';
import RegistrarResenia from './components/Forms/RegistrarReseña/RegistrarResenia';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="contenedor-principal">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/paginaPrincipal" element={<PaginaPrincipal />} />
            <Route path="/registrarProductos" element={<RegistrarProductos />} />
            <Route path="/registrarResenia" element={<RegistrarResenia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
