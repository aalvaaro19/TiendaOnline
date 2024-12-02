import React from 'react'
import './BotonComprarProductoIndividual.css'
import { Link } from 'react-router-dom';
function    BotonComprarProductoIndividual() {
return (
    <>
    <Link to="/PaginaPago">
        <button className='boton-comprar-p-i'>
            COMPRAR
        </button>
    </Link>
    </>
)
}
export default BotonComprarProductoIndividual;