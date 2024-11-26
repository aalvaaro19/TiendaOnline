import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Balon from '../../Balon/Balon';
import './RegistrarResenia.css';

function RegistrarResenia() {
  return (
    <>
      <Balon />
      <div className='contenedor-login'>
        <div className='encabezado-contenedor-login'>
          <GiSoccerBall className='logo-usuario' />
        </div>
        <div className='principal-contenedor-login'>
          <form className='formulario-productos'>
            <div className='entrada-campo'>
              <input
                type="text"
                id="Comentario"
                name="Comentario"
                placeholder="Comentario de la reseña"
                className="campo-input"
                required
              />
            </div>
            <div className='entrada-campo'>
              <input
                type='number'
                id="Calificacion"
                name="Calificacion"
                placeholder="Calificacion de la reseña (1-5)"
                className="campo-input"
                min="1"
                max="5"
                required
              ></input>
            </div>
            <div className='entrada-campo'>
              <input
                type="date"
                id="fecha"
                name="fecha"
                className="campo-input"
                required
              />
            </div>
            <div className='boton-contenedor-login'>
              <button type="submit" className='boton-login'>
                <Link to="/#" className='palabra-boton-login'>Registrar reseña</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Balon />
    </>
  );
}

export default RegistrarResenia;