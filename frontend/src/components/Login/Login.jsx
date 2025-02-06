import React, { useState } from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom'; 
import Balon from '../Balon/Balon';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [nombreUsuario, setnombreUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombreUsuario: nombreUsuario, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        console.log('Usuario inició sesión correctamente');
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        console.log(data);
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
              id="nombreUsuario" 
              placeholder="Nombre de usuario" 
              className="entrada-correo"
              value={nombreUsuario}
              onChange={(e) => setnombreUsuario(e.target.value)}
            />
          </div>
          <div className="entrada-contrasena">
            <input 
              type="password" 
              id="password" 
              placeholder="Contraseña" 
              className="entrada-contrasena"
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
