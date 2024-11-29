import React from 'react';
import './HeaderAuxiliar.css';
import imagenLogo from '../../images/LogoTienda.png'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";



function HeaderAuxiliar() {
  return (
    <div className='header-auxiliar'>
    <Link to='/'>
    <IoMdHome className='home-icono-auxiliar'/>
    </Link>
		<img  
			className="header-auxiliar-Image"
			src= {imagenLogo}
			alt="logo" 
		/>
        <div className='usuario'>
        <Link to="/login">
          <FaRegUser  className="color-icono-auxiliar"/>
        </Link>
        </div>
    </div>

  );
}

export default HeaderAuxiliar;