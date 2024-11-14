import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import './LoginContenedor.css';

function LoginContainer() {
  return (
    <div className='contenedor-login'>
      <div className='encabezado-contenedor-login'>
        <GiSoccerBall className='logo-usuario'/>
      </div>
      <div className='principal-contenedor-login'>
        <div className='entrada-correo'>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className='entrada-contrasena'>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
          />
        </div>
      </div>
      <div className='boton-contenedor-login'>
        <button className='boton-login'>Iniciar Sesion</button>
      </div>
      <div className='inferior-contenedor-login'>
        <p>¿No tienes cuenta? 
          <button className='navBar-element'>
            <Link to="/registro">Registrate</Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginContainer;
