import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Balon from '../Balon/Balon';
import './Registro.css';

function Registro() {
  return (
    <>
      <Balon />
      <div className='contenedor-registro'>
        <div className='encabezado-contenedor-registro'>
          <GiSoccerBall className='logo-usuario'/>
        </div>
        <div className='principal-contenedor-registro'>
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
        <div className='boton-contenedor-registro'>
          <button className='boton-registro'>
            <Link to="/login" className='palabra-boton-registro'>Registrarse</Link>
          </button>
        </div>
        <div className='inferior-contenedor-registro'>
          <p>¿Ya tienes cuenta? 
            <button className='navBar-element'>
              <Link to="/login">Iniciar sesión</Link>
            </button>
          </p>
        </div>
      </div>
      <Balon />
    </>
  );
}

export default Registro;