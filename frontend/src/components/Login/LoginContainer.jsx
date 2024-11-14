import React from 'react'
import { GiSoccerBall } from "react-icons/gi";
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
            <a href="#Registro">Registrate</a>
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginContainer
