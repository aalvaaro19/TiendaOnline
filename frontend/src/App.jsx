import './App.css';
import Balon from './components/Balon/Balon';
import LoginContainer from './components/Login/LoginContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Asegúrate de que importes BrowserRouter
import Registro from './components/Registro/Registro';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='LogIn'>
          <h1>Limited Football</h1>
        </header>
        <div className='contenedor-principal'>
          <Balon />
          <Routes>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
          <Balon />
        </div>
      </div>
    </Router>
  );
}

export default App;