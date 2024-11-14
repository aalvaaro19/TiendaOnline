import './App.css';
import Balon from './components/Balon/Balon';
import LoginContainer from './components/Login/LoginContainer';
import Registro from './components/Registro/Registro';


function App() {
  return (
    <div className="App">
      <header className='LogIn'>
        <h1>Limited Footbal</h1>
      </header>
      <div className='contenedor-principal'>
        <Balon />
        <Registro />
        {/* <LoginContainer className='login-container' /> */}
        <Balon />
      </div>
    </div>
  );
}

export default App;