import React from 'react'
import './Contacto.css';
import Footer from '../footer/Footer';
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';

function Contacto() {
  return (
    <div className="div-externo-contacto">
    <HeaderAuxiliar/>
    <h1 className="texto-contacto-con-nosotros">Contacta con nosotros</h1>
    <h2 className="texto-contacto-info">Para cualquier queja, duda o sugerencia porfavor rellene el siguiente formulario</h2>
    <div className="container-contacto">
        <div className="container-parte-izquierda">
            <div className="select-tipo-contacto">
                    <select id="tipo-contacto">
                    <option value="" disabled selected hidden>
                        Selecciona una de las opciones
                    </option>
                    <option value="queja">Queja</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="duda">Duda</option>
                    </select>
            </div>
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
    <div className="container-informacion">
        <div className="mapa-ubicacion">
        <h3>Encuéntranos aquí:</h3>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2859807148025!2d-3.6836946252648386!3d40.42207205531622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a2e8cce57b%3A0x6e826e858d818129!2sC.%20de%20Alcal%C3%A1%2C%2066%2C%20Salamanca%2C%2028009%20Madrid!5e0!3m2!1ses!2ses!4v1733216166289!5m2!1ses!2ses" 
            width="1300" 
            height="500"
            allowfullscreen="" 
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Contacto