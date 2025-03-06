import React, { useEffect, useState } from 'react';
import './PaginaFavoritos.css';
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';
import Footer from '../footer/Footer';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Certificacion from '../certificacion/Certificacion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductoFavoritos from '../ProductosFavoritos/ProductosFavoritos';

function PaginaFavoritos() {
  const token = localStorage.getItem('token');
  console.log(token);
  const [productosDetalles, setProductosDetalles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const idUsuario = decodedToken.id;
      console.log("ID de usuario:", idUsuario);
      axios.get(`/listarFavoritos/${idUsuario}`)
        .then((response) => {
          console.log("Productos favoritos recibidos de la API:", response.data);
          setProductosDetalles(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los productos favoritos:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleRemoveFavorite = (idProducto) => {
    setProductosDetalles((prevProductos) =>
      prevProductos.filter((producto) => producto.idProducto !== idProducto)
    );
  };

  return (
    <>
      <HeaderAuxiliar />
      <div className='contenedor-favoritos-principal'>
        <div className='contenedor-h1-favoritos'>
          <button className='titulo-favoritos'>Favoritos</button>
        </div>
        <div className='contenedor-contenido-favoritos-principal'>
          {loading ? (
            <p>Cargando productos favoritos...</p> 
          ) : productosDetalles.length === 0 ? (
            <p>No tienes productos en favoritos.</p>
          ) : (
            productosDetalles.map((producto) => (
              <Link key={producto.idProducto} to={`/ProductoIndividual/${producto.idProducto}`} className="link-producto-individual">
                <ProductoFavoritos
                key={producto.idProducto}
                idProducto={producto.idProducto}
                name={producto.nombre}
                description={producto.descripcion}
                price={producto.precio}
                image={producto.imagen}
                carpeta={producto.carpeta}
                onRemoveFavorite={handleRemoveFavorite}
              />
              </Link>
            ))
          )}
        </div>
      </div>
      <Certificacion />
      <ContactaConNosotros />
      <Footer />
    </>
  );
}

export default PaginaFavoritos;
