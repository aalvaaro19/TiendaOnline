import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Balon from '../Balon/Balon';
import './Registro.css';

function Registro() {
  return (
    <div className='contenedor-login-login'>
      <Balon />
      <div className='contenedor-registro'>
        <div className='encabezado-contenedor-registro'>
          <GiSoccerBall className='logo-usuario'/>
        </div>
        <div className='principal-contenedor-registro'>
          <div>
            <input
              type="text"
              id="text"
              placeholder="Nombre completo"
              className='entrada'
            />
          </div>
          <div>
            <input
              type="number"
              id="number"
              placeholder="Número de telefono"
              className='entrada'
            />
          </div>
          <div>
            <input
              type="text"
              id="text"
              placeholder="Dirección"
              className='entrada'
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className='entrada'
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className='entrada'
            />
          </div>
        </div>
        <div className='boton-contenedor-registro'>
          <Link to="/login" className='boton-registro'>
            <button className='boton-registro'>
              Registrarse
            </button>
          </Link>
        </div>
        <div className='inferior-contenedor-registro'>
          <p>¿Ya tienes cuenta? 
            <button className='navBar-element-registro'>
              <Link to="/login">Iniciar sesión</Link>
            </button>
          </p>
        </div>
      </div>
      <Balon />
    </div>
  );
}

export default Registro;