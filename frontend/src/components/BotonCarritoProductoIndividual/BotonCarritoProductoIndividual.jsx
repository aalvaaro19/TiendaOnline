import React from 'react';
import './BotonCarritoProductoIndividual.css';
import { useNavigate } from 'react-router';

function BotonCarritoProductoIndividual({ idProducto, cantidad, precioUnitario }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const obtenerPrecioNumerico = (precio) => {
    return parseFloat(precio.replace('$', '').replace(',', ''));
  };

  const obtenerIdUsuarioDesdeToken = () => {
    try {
      if (!token) {
        throw new Error("No hay token disponible");
      }
      
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const idUsuario = decodedToken.id;
      return idUsuario;
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      return null;
    }
  };

  const handleAñadirAlCarrito = () => {
    const idUsuario = obtenerIdUsuarioDesdeToken();
    console.log('idUsuario:', idUsuario);

    if (!idUsuario) {
      console.error("No se pudo obtener el ID del usuario");
      return;
    }

    const precioNumerico = obtenerPrecioNumerico(precioUnitario);

    if (isNaN(precioNumerico)) {
      console.error("No se pudo obtener el precio numérico");
      return;
    }

    fetch('/anadirAlCarrito', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idUsuario,
        idProducto,
        cantidad,
        precioUnitario
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
        } else {
          navigate('/PaginaCarrito');
          console.log("Cantidad seleccionada:", cantidad);
          console.log("Producto añadido al carrito:", data);
        }
      })
      .catch(error => {
        console.error('Error al añadir al carrito:', error);
      });
  };

  return (
    <button onClick={handleAñadirAlCarrito} className='boton-carrito-p-i'>
      CARRITO
    </button>
  );
}

export default BotonCarritoProductoIndividual;
