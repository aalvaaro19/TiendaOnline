import React from 'react'
import imgBalon from '../../images/balon.png'
import './Balon.css'
function    Balon() {
  return (
    <div className="balon-logo-contenedor">
        <img src={imgBalon} alt="logo-balon" id='balon-login' className='imagenBalon'/>
    </div>  
)
}
export default Balon