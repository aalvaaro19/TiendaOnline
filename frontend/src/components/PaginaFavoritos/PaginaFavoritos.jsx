import React from 'react'
import './PaginaFavoritos.css'
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';
import Footer from '../footer/Footer'
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Certificacion from '../certificacion/Certificacion';
import ProductosFavoritos from '../ProductosFavoritos/ProductosFavoritos';
import { Link } from 'react-router-dom';

function PaginaFavoritos() {
  return (
    <>
    <HeaderAuxiliar />
    <div className='contenedor-favoritos-principal'>
        <div className='contenedor-h1-favoritos'>
            <button className='titulo-favoritos'>Favoritos</button>
        </div>
        <div className='contenedor-contenido-favoritos-principal'>
          <Link to="/ProductoIndividual" className="link-producto-individual">
            <ProductosFavoritos className="producto-favorito"/>
          </Link>
          <Link to="/ProductoIndividual" className="link-producto-individual">
            <ProductosFavoritos className="producto-favorito"/>
          </Link>
          <Link to="/ProductoIndividual" className="link-producto-individual">
            <ProductosFavoritos className="producto-favorito"/>
          </Link>
        </div>
    </div>
    <Certificacion />
    <ContactaConNosotros />
    <Footer />
    </>
  )
}

export default PaginaFavoritos