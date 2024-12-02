import React from 'react'
import './BotonSeguirComprandoCarrito.css'
import { useNavigate } from 'react-router-dom';

function    BotonSeguirComprandoCarrito() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      }
return (
    <main>
    <button className='boton-seguir-comprando-carrito' onClick={handleBack}>
        SEGUIR COMPRANDO
    </button>
    </main>
)
}
export default BotonSeguirComprandoCarrito;