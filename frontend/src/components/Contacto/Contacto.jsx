import React from 'react'
import './Contacto.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Contacto() {
  return (
    <div className="div-externo-contacto">
    <Header/>
    <h1 className="texto-contacto-con-nosotros">Contacta con nosotros</h1>
    <h2 className="texto-contacto-info">Para cualquier queja, duda o sugerencia porfavor rellene el siguiente formulario</h2>


    <div className="container-contacto">
        <div className="container-parte-izquierda">
            <div className="input-nombre">
                <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-correo">
                <input type="email" placeholder="Correo Electrónico" />
            </div>
            <div className="boton-enviar">
                <button>Enviar</button>
            </div>
        </div>
        <div className="container-parte-derecha">
            <textarea placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Contacto