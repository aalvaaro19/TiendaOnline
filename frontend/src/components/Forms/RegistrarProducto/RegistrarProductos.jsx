import React from 'react';
import { GiSoccerBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Balon from '../../Balon/Balon';
import './RegistrarProductos.css';

function RegistrarProductos() {
  return (
    <div className='principal-registrar-productos'>
      <Balon />
      <div className='contenedor-productos'>
        <div className='encabezado-contenedor-productos'>
          <GiSoccerBall className='logo-usuario' />
        </div>
        <div className='principal-contenedor-productos'>
          <form className='formulario-productos'>
            <div className='entrada-campo'>
              <input
                type="text"
                id="nombreProducto"
                name="nombreProducto"
                placeholder="Nombre del producto"
                className="campo-input"
                required
              />
            </div>
            <div className='entrada-campo'>
              <input
              type='text'
                id="descripcionProducto"
                name="descripcionProducto"
                placeholder="Descripción del producto"
                className="campo-input"
                rows="3"
                required
              ></input>
            </div>
            <div className='entrada-campo'>
              <input
                type="number"
                id="precioProducto"
                name="precioProducto"
                placeholder="Precio del producto"
                className="campo-input"
                rows="3"
                required
              ></input>
            </div>
            <div className='entrada-campo'>
              <input
                type="number"
                id="stockProducto"
                name="stockProducto"
                placeholder="Stock del producto"
                className="campo-input"
                rows="3"
                required
              ></input>
            </div>
            <div className='entrada-campo'>
              <input
                type="file"
                id="fotoProducto"
                name="fotoProducto"
                accept="image/*"
                className="campo-input"
                required
              />
            </div>
            <div className='boton-contenedor-productos'>
              <button type="submit" className='boton-productos'>
                <Link to="/#" className='palabra-boton-productos'>Registrar producto</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Balon />
    </div>
  );
}

export default RegistrarProductos;