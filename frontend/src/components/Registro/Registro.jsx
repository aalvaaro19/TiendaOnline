import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import './Registro.css';

function Registro() {
  return (
    <div className='contenedor-login'>
      <div className='encabezado-contenedor-login'>
        <GiSoccerBall className='logo-usuario'/>
      </div>
      <div className='principal-contenedor-login'>
        <div className='entrada-correo'>
          <input
            type="text"
            id="text"
            placeholder="Nombre completo"
          />
        </div>
        <div className='entrada-correo'>
          <input
            type="number"
            id="number"
            placeholder="Número de telefono"
          />
        </div>
        <div className='entrada-correo'>
          <input
            type="text"
            id="text"
            placeholder="Dirección"
          />
        </div>
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
        <button className='boton-login'>Registrarse</button>
      </div>
      <div className='inferior-contenedor-login'>
        <p>¿Ya tienes cuenta? 
          <button className='navBar-element'>
            <Link to="/">Iniciar sesión</Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Registro;