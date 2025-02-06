import React, { useEffect, useState } from 'react'
import './PrecioIndividual.css'
import { useParams } from 'react-router';

function PrecioIndividual(props) {
    const { idProducto } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cantidad, setCantidad] = useState(1);
  
    useEffect(() => {
      fetch(`http://localhost:5000/api/obtenerProducto/${idProducto}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Datos del producto:", data);
          setProducto(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error);
          setLoading(false);
        });
    }, [idProducto]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!producto) {
      return <div>Producto no encontrado.</div>;  // Mensaje si no se encuentra el producto
    }
  
    const precioTotal = props.precio * cantidad;
  return (
    <p className='precio-individual'>${precioTotal}</p>
  )
}

export default PrecioIndividual