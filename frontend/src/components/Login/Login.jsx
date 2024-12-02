import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom'; 
import Balon from '../Balon/Balon';
import './Login.css';

function Login() {
  return (
    <div className='contenedor-login-login'>
      <Balon />
      <div className="contenedor-login">
        <div className="encabezado-contenedor-login">
          <GiSoccerBall className="logo-usuario" />
        </div>
        <div className="principal-contenedor-login">
          <div className="entrada-correo">
            <input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="entrada-contrasena">
            <input type="password" id="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className="boton-contenedor-login">
          <button className="boton-login">
            <Link to="/" className="palabra-boton-login-login">
              Iniciar sesión
            </Link>
          </button>
        </div>
        <div className="inferior-contenedor-login">
          <p className='cuenta-texto'>
            ¿No tienes cuenta?{' '}
            <button className="navBar-element-login">
              <Link to="/registro" className='palabra-boton-login'>Regístrate</Link>
            </button>
          </p>
          {/* <p>
            Registra un Producto{' '}
            <button className="navBar-element">
              <Link to="/registrarProductos">Entra aqui</Link>
            </button>
          </p>
          <p>
            Registra una Reseña{' '}
            <button className="navBar-element">
              <Link to="/registrarResenia">Entra aqui</Link>
            </button>
          </p> */}
        </div>
      </div>
      <Balon />
    </div>
  );
}

export default Login;
