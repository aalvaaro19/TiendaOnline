import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import FotosApartados from './componentes/fotosApartado/FotosApartados';




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
      </body>

      <footer className='pie-pagina'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
