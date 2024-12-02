import React from 'react'
import './ProductosFavoritos.css'
import equipacion from '../../images/equipacion-mancity.png'

function ProductosFavoritos() {
  return (
    <div className='contenedor-contenido-favoritos'>
      <div className='imagen-div'>
        <img src={equipacion} alt='IMAGEN PRODUCTO' className='imagen-favoritos'></img>
      </div>
      <div className='info-producto-favoritos'>
        <p>Nombre del Producto</p>
        <p>**** €</p>
      </div>
    </div>
  )
}

export default ProductosFavoritos