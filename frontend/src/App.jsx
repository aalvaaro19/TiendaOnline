import './App.css';
// import Balon from './components/Balon/Balon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="contenedor-principal">
          {/* <Balon /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/paginaPrincipal" element={<PaginaPrincipal />} />
          </Routes>
          {/* <Balon /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
