import React from 'react'
import './PaginaFavoritos.css'
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';
import Footer from '../footer/Footer'
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Certificacion from '../certificacion/Certificacion';
import ProductosFavoritos from '../ProductosFavoritos/ProductosFavoritos';


function PaginaFavoritos() {
  return (
    <>
    <HeaderAuxiliar />
    <div className='contenedor-favoritos-principal'>
        <div className='contenedor-h1-favoritos'>
            <button className='titulo-favoritos'>Favoritos</button>
        </div>
        <div className='contenedor-contenido-favoritos-principal'>
            <ProductosFavoritos />
            <ProductosFavoritos />
            <ProductosFavoritos />
        </div>
    </div>
    <Certificacion />
    <ContactaConNosotros />
    <Footer />
    </>
  )
}

export default PaginaFavoritos