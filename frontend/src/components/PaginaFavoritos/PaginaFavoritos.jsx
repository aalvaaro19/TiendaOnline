import React from 'react'
import './PaginaFavoritos.css'
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';
import Footer from '../footer/Footer'
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Certificacion from '../certificacion/Certificacion';


function PaginaFavoritos() {
  return (
    <>
    <HeaderAuxiliar />
    <div className='contenedor-favoritos-principal'>
        <div className='contenedor-h1-favoritos'>
            <h2 className='titulo-favoritos'>Lista de Favoritos</h2>
        </div>
        <div className='contenedor-contenido-favoritos-principal'>
        <div className='contenedor-contenido-favoritos'>
            <div className='imagen-div'>
            <img src=''     alt='IMAGEN PRODUCTO' className='imagen-favoritos'></img>
            </div>
            <div className='info-producto-favoritos'>
                <p>Nombre del Producto</p>
                <p>**** €</p>
            </div>
        </div>
        <div className='contenedor-contenido-favoritos'>
            <div className='imagen-div'>
            <img src=''     alt='IMAGEN PRODUCTO' className='imagen-favoritos'></img>
            </div>
            <div className='info-producto-favoritos'>
                <p>Nombre del Producto</p>
                <p>**** €</p>
            </div>
        </div>

        <div className='contenedor-contenido-favoritos'>           
            <div className='imagen-div'>
            <img src=''     alt='IMAGEN PRODUCTO' className='imagen-favoritos'></img>
            </div>
            <div className='info-producto-favoritos'>
                <p>Nombre del Producto</p>
                <p>**** €</p>
            </div>
        </div>
        <div className='contenedor-contenido-favoritos'>
            <div className='imagen-div'>
            <img src=''     alt='IMAGEN PRODUCTO' className='imagen-favoritos'></img>
            </div>
            <div className='info-producto-favoritos'>
                <p>Nombre del Producto</p>
                <p>**** €</p>
            </div>
        </div>
        </div>
    </div>
    <Certificacion />
    <ContactaConNosotros />
    <Footer />
    </>
  )
}

export default PaginaFavoritos