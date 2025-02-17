import React from 'react';
import './HeaderAuxiliar.css';
import imagenLogo from '../../images/LogoTienda.png'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { IoHomeOutline, IoLogInOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';

function HeaderAuxiliar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          setIsLoggedIn(true);
      }
  }, []);

  const handleLogout = async () => {
      try {
          const response = await fetch('/logout', { method: 'POST' });
          const data = await response.json();
          console.log(data.message);
          
          // Eliminar el token del almacenamiento local
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          alert('Sesión cerrada exitosamente');
      } catch (error) {
          console.error('Error al cerrar sesión:', error);
      }
  };
  
  return (
    <div className='header-auxiliar'>
    <Link to='/'>
    <IoHomeOutline  className='home-icono-auxiliar'/>
    </Link>
		<img  
			className="header-auxiliar-Image"
			src= {imagenLogo}
			alt="logo" 
		/>
        <div className='usuario'>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="color-iconos">
              <IoLogInOutline  className='color-icono-auxiliar'/>
          </button>
        ) : (
          <Link to="/login">
              <FaRegUser className="color-iconos"/>
          </Link>
        )}
        </div>
    </div>

  );
}

export default HeaderAuxiliar;