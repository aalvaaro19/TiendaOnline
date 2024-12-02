import React from 'react'
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros'
import Footer from '../footer/Footer'
import Certificacion from '../Certificacion/Certificacion'
import Header from "../header/Header"
import './ProductoIndividual.css'
import BotonComprarProductoIndividual from '../BotonComprarProductoIndividual/BotonComprarProductoIndividual'
import BotonCarritoProductoIndividual from '../BotonCarritoProductoIndividual/BotonCarritoProductoIndividual'
import equipacionIndividual from "../../images/equipacion-españa.png"

function ProductoIndividual() {
  return (
    <div className='pagina-producto'>
    <Header />
    <div className='contenedor-producto-individual'>
    <div className='contenedor-producto-individual-imagen'>
       <img src={equipacionIndividual} alt='foto' className='imagen-individual' />
    </div>
    <div className='contenedor-producto-individual-contenido'>
      <div className='nombre-producto'>
        <h1 className='titulo-producto-individual'>Nombre Producto</h1>
      </div>
      <div className='informacion-producto'>
        <p className='texto-informacion-producto'>Revive uno de los momentos más icónicos del fútbol mundial con esta camiseta retro de Zinedine Zidane, inspirada en la equipación original que Francia llevó en el Mundial de 1998.Confeccionada con materiales de alta calidad, esta réplica oficial destaca por su atención al detalle, desde el clásico escudo de la Federación Francesa de Fútbol hasta las características rayas azules y rojas que evocan el estilo inconfundible de la época.</p>
      </div>
      <p className='precio-individual'>**** €</p>
      <p className='link-certificacion-individual'>Certify By Limited</p>
      <div className='botones-producto-individual'>
        <BotonCarritoProductoIndividual />
        <BotonComprarProductoIndividual />
      </div>
    </div>
    </div>
    <Certificacion />
    <ContactaConNosotros />
    <Footer />
    </div>
  )
}

export default ProductoIndividual