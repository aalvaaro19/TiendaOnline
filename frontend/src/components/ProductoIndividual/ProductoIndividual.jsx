import React from 'react'
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros'
import Footer from '../footer/Footer'
import Certificacion from '../certificacion/Certificacion'
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar'


function ProductoIndividual() {
  return (
    <>
    <HeaderAuxiliar />
    <div className='contenedor-producto-individual'>
    <div className='contenedor-producto-individual-imagen'></div>
    <div className='contenedor-producto-individual-contenido'>
      <div className='nombre-producto'>
        <h1>Nombre Producto</h1>
      </div>
      <div className='informacion-producto'>
        <p>Texto informativo del producto</p>
      </div>
      <p>PRECIO €</p>
      <p>Certify By Limited</p>
      <div className='botones-producto-individual'>
        <button>CARRITO</button>
        <button>COMPRAR</button>
      </div>
    </div>
    </div>
    <Certificacion />
    <ContactaConNosotros />
    <Footer />
    </>
  )
}

export default ProductoIndividual