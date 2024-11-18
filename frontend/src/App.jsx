import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import FotosApartados from './componentes/fotosApartado/FotosApartados';
import ContactaConNosotros from './componentes/ContactaConNosotros/ContactaConNosotros';
import Descripcion from './componentes/descripcion/descripcion';
import EscaleraFotos from './componentes/escaleraFotos/CarruselFotos';




function App() {
  return (
    <div className="App">
      <header className='pagina-principal'>
      <Header />
      </header>
      <body>
      <div className='contenedor-principal'>
      <FotosApartados />
      </div>
      <div className='descripcion-principal'>
      <Descripcion />
      </div>
      <div className='escalerafotos-principal'>
      <EscaleraFotos />
      </div>
      <div className='contacta-con-nosotros'>
      <ContactaConNosotros />
      </div>   
      </body>

      <footer className='pie-pagina'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
