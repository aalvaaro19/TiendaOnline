import './App.css';
import Balon from './components/Balon/Balon';
import LoginContainer from './components/Login/LoginContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro/Registro';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import FotosApartados from './componentes/fotosApartado/FotosApartados';
import ContactaConNosotros from './componentes/ContactaConNosotros/ContactaConNosotros';
import Descripcion from './componentes/descripcion/descripcion';
import EscaleraFotos from './componentes/escaleraFotos/CarruselFotos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="LogIn">
          <h1>Limited Football</h1>
        </header>
        <div className="contenedor-principal">
          <Balon />
          <Routes>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='/inicio' element={<Header />} />
          </Routes>
          <Balon />
        </div>

        {/* Página principal */}
        <header className="pagina-principal">
          <Header />
        </header>

        <main>
          <div className="contenedor-principal">
            <FotosApartados />
          </div>
          <div className="descripcion-principal">
            <Descripcion />
          </div>
          <div className="escalerafotos-principal">
            <EscaleraFotos />
          </div>
          <div className="contacta-con-nosotros">
            <ContactaConNosotros />
          </div>
        </main>
        <footer className="pie-pagina">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
