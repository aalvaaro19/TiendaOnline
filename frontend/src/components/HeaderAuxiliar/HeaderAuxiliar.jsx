import React from 'react';
import './HeaderAuxiliar.css';
import logo from '../../images/LogoTienda.png'

function HeaderAuxiliar() {
  return (
    <header>
		<img  
			className="header-Image"
			src= {logo}
			alt="logo" 
		/>
        <div className='usuario'>

        </div>
    </header>
  );
}

export default HeaderAuxiliar;