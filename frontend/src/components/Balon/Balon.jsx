import React from 'react'
import imgBalon from '../../imagenes/balon.png'
import './Balon.css'
function    Balon() {
  return (
    <div className="balon-logo-contenedor">
        <img src={imgBalon} alt="logo-balon" id='balon-login'/>
    </div>  
)
}
export default Balon