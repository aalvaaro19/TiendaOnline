import React from 'react'
import './BotonCarritoProductoIndividual.css'
import { Link } from 'react-router-dom';
function    BotonCarritoProductoIndividual() {
return (
    <>
    <Link to="/PaginaCarrito">
    <button className='boton-carrito-p-i'>
        CARRITO
    </button>
    </Link>
    </>
)
}
export default BotonCarritoProductoIndividual;