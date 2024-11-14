import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import './LoginContenedor.css';

function LoginContainer() {
  return (
    <div className='contenedor-login'>
      <div className='encabezado-contenedor-login'>
        <HiOutlineUserCircle className='logo-usuario'/>
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
        <p>¿No tienes cuenta? <b>Registrate</b></p>
      </div>
    </div>
  )
}

export default LoginContainer
