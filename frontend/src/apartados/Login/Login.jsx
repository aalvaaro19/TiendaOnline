import './App.css';
import Balon from './componentes/balonLogin/Balon';
import LoginContainer from './componentes/LoginContainer';


function Login() {
  return (
    <div className="App">
      <header className='LogIn'>
        <h1>Limited Footbal</h1>
      </header>
      <div className='contenedor-principal'>
        <Balon />
        <LoginContainer className='login-container' />
        <Balon />
      </div>
    </div>
  );
}

export default App;
