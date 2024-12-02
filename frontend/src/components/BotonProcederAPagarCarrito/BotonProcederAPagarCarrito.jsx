import React from 'react'
import './BotonProcederAPagarCarrito.css'
import { Link } from 'react-router-dom';
function    BotonProcederAPagarCarrito() {
return (
    <main>
    <button className='boton-proceder-pago-carrito'>
        <Link to="/PaginaPago"><p className='palabra-boton-pedido'>TRAMITAR PEDIDO</p></Link>
    </button>
    </main>
)
}
export default BotonProcederAPagarCarrito;