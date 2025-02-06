import React, { useState } from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import Balon from '../Balon/Balon';
import './Registro.css';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Registro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombreUsuario: '',
    nombreCompleto: '',
    telefono: '',
    direccion: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar los datos al backend sin encriptar la contraseña
      await axios.post('/crearUsuario', formData);
      
      // Restablece el formulario después del registro exitoso
      setFormData({
        nombreUsuario: '',
        nombreCompleto: '',
        telefono: '',
        direccion: '',
        email: '',
        password: ''
      });
      console.log('Usuario:', formData);
      console.log('Usuario creado correctamente');
      navigate('/login');  // Redirige al login
    } catch (error) {
      console.error('Error creando usuario:', error);
    }
  };

  return (
    <div className='contenedor-login-login'>
      <Balon />
      <div className='contenedor-registro'>
        <div className='encabezado-contenedor-registro'>
          <GiSoccerBall className='logo-usuario'/>
        </div>
        <form onSubmit={handleSubmit} className='principal-contenedor-registro'>
        <div>
            <input
              type="text"
              id="nombreUsuario"
              placeholder="Nombre usuario"
              className='entrada'
              value={formData.nombreUsuario}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="nombreCompleto"
              placeholder="Nombre completo"
              className='entrada'
              value={formData.nombreCompleto}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              id="telefono"
              placeholder="Número de telefono"
              className='entrada'
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="direccion"
              placeholder="Dirección"
              className='entrada'
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className='entrada'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className='entrada'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='boton-contenedor-registro'>
            <button type="submit" className='boton-registro'>
              Registrarse
            </button>
          </div>
        </form>
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