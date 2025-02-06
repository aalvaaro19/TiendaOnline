import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Footer from '../footer/Footer';
import Certificacion from '../certificacion/Certificacion';
import Header from "../header/Header";
import './ProductoIndividual.css';
import BotonComprarProductoIndividual from '../BotonComprarProductoIndividual/BotonComprarProductoIndividual';
import BotonCarritoProductoIndividual from '../BotonCarritoProductoIndividual/BotonCarritoProductoIndividual';
import { Link } from 'react-router-dom';
import Cantidad from '../Cantidad/Cantidad';
import PrecioIndividual from '../Precio/PrecioIndividual';
import { CiCircleCheck } from "react-icons/ci";

function ProductoIndividual() {
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

  const precioTotal = producto.precio * cantidad;

  return (
    <div className="pagina-producto">
      <Header />
      <div className="contenedor-producto-individual">
        <div className="contenedor-producto-individual-imagen">
          {producto.carpeta && producto.imagen ? (
            <img src={`/images/${producto.carpeta}/${producto.imagen}.png`} alt={producto.nombre} className="imagen-individual" />
          ) : (
            <p>Imagen no disponible</p>
          )}
        </div>
        <div className="contenedor-producto-individual-contenido">
          <div className="nombre-producto">
            <h1 className="titulo-producto-individual">{producto.nombre}</h1>
          </div>
          <div className="informacion-producto">
            <p className="texto-informacion-producto">{producto.descripcion}</p>
          </div>
          <div className="precio-y-cantidad">
            <PrecioIndividual precio={precioTotal} />
            <Cantidad cantidad={cantidad} setCantidad={setCantidad}/>
          </div>
          <div className="certificacion-contenedor">
            <Link to="/paginaCertificacion" className="a-link-certificacion-individual">
              <p className="link-certificacion-individual">Certify By Limited</p>
            </Link>
            <CiCircleCheck className="check-logo" />
          </div>
          <div className="botones-producto-individual">
            <BotonCarritoProductoIndividual idProducto={producto.idProducto} cantidad={cantidad} precioUnitario={producto.precio}/>
            <BotonComprarProductoIndividual />
          </div>
        </div>
      </div>
      <Certificacion />
      <ContactaConNosotros />
      <Footer />
    </div>
  );
}

export default ProductoIndividual;