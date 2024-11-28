import React from 'react';
import './HeaderAuxiliar.css';
import imagenLogo from '../../images/LogoTienda.png'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";


function HeaderAuxiliar() {
  return (
    <header>
		<img  
			className="header-auxiliar-Image"
			src= {imagenLogo}
			alt="logo" 
		/>
        <div className='usuario'>
        <Link to="/login">
          <FaRegUser  className="color-icono"/>
        </Link>
        </div>
    </header>
  );
}

export default HeaderAuxiliar;