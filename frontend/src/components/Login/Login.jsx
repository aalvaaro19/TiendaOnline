import React, { useState } from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'; 
import Balon from '../Balon/Balon';
import './Login.css';
// import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const [nombreUser, setnombreUser] = useState('');
  const [password, setPassword] = useState('');
  // const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch(`/loginUser/${nombreUser}/${password}`);
      const idUsuario = await response.json();
      if (idUsuario) {
        console.log('Usuario inició sesión correctamente');
        console.log(idUsuario);
        navigate('/');
      } else {
        console.log('Usuario o contraseña incorrectos');
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='contenedor-login-login'>
      <Balon />
      <div className="contenedor-login">
        <div className="encabezado-contenedor-login">
          <GiSoccerBall className="logo-usuario" />
        </div>
        <div className="principal-contenedor-login">
          <div className="entrada-correo">
            <input 
              type="text" 
              id="nombreUser" 
              placeholder="Nombre de usuario" 
              value={nombreUser}
              onChange={(e) => setnombreUser(e.target.value)}
            />
          </div>
          <div className="entrada-contrasena">
            <input 
              type="password" 
              id="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="boton-contenedor-login">
          <button className="boton-login" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
        <div className="inferior-contenedor-login">
          <p className='cuenta-texto'>
            ¿No tienes cuenta?{' '}
            <button className="navBar-element-login">
              <Link to="/registro" className='palabra-boton-login'>Regístrate</Link>
            </button>
          </p>
        </div>
      </div>
      <Balon />
    </div>
  );
}

export default Login;
