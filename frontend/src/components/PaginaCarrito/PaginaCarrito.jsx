import React, { useState, useEffect } from 'react';
import '../PaginaCarrito/PaginaCarrito.css';
import Header from '../HeaderAuxiliar/HeaderAuxiliar';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import BotonProcederAPagarCarrito from '../BotonProcederAPagarCarrito/BotonProcederAPagarCarrito';
import Footer from '../footer/Footer';
import BotonSeguirComprandoCarrito from '../BotonSeguirComprandoCarrito/BotonSeguirComprandoCarrito';
import Certificacion from '../certificacion/Certificacion';
import { RiDeleteBin2Line } from "react-icons/ri";


function PaginaCarrito(){
  const token = localStorage.getItem('token');
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const idUsuario = decodedToken.id;
    console.log('ID de usuario:', idUsuario);
    fetch(`/carrito/${idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from BBDD:', data); // Console log to output the data from the database
        setCarrito(data);
        // Calcular el total del carrito
        const totalCarrito = data.reduce((acc, producto) => acc + producto.subtotal, 0);
        setTotal(totalCarrito);
      })
      .catch((error) => {
        console.error('Error al obtener el carrito:', error);
      });
  }, [token]);

  const eliminarProductoDelCarrito = (idProducto) => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const idUsuario = decodedToken.id;

    fetch(`/eliminarDelCarrito/${idUsuario}/${idProducto}`, {
        method: 'DELETE',
    })
    .then((response) => {
        if (response.ok) {
            setCarrito(carrito.filter((producto) => producto.idProducto !== idProducto));
        } else {
        }
    })
    .catch((error) => {
        console.error('Error al eliminar el producto del carrito:', error);
    });
  };

  return (
    <div className='general-carrito'>
        <Header />
        <div className='h1-carrito-div'>
            <h1 className='h1-carrito'>CARRITO DE COMPRA</h1>
        </div>

        <div className="pagina-carrito-main">
    {carrito.length > 0 ? (
      carrito.map((producto) => (
        <div key={producto.idProducto} className="pagina-carrito-sector-1">
            <img src={require(`../../images/${producto.carpeta}/${producto.imagen}.png`)} alt={producto.nombre} className="camiPrueba" />
            <div className="conjunto-texto-carrito-sector-1">
                <div className="camiPrueba-div">
                <p className="h2-texto-carrito-sector-1">{producto.nombre}</p>
                </div>
                <p className="p-texto-carrito-sector-1">Cantidad: {producto.cantidad}</p>
                <p className="precio-texto-carrito-sector-1">Precio: ${producto.precioUnitario}</p>
                <RiDeleteBin2Line
                    className="icono-eliminar-sector-1"
                    onClick={() => eliminarProductoDelCarrito(producto.idProducto)}
                />
            </div>
        </div>
      ))
    ) : (
      <p>No hay productos en el carrito.</p>
    )}

    <hr />
    <div className="pagina-carrito-sector-2">
      <div className="columna-izq-carrito-sector-2">
        <p className="texto-columna-izq-sector-2">Total Parcial</p>
        <p className="texto-columna-izq-sector-2">Envio (DHL)</p>
        <p className="texto-columna-izq-sector-2">Impuestos</p>
      </div>
      <div className="columna-der-carrito-sector-2">
        <p className="texto-columna-der-sector-2">${total.toFixed(2)}</p>
        <p className="texto-columna-der-sector-2">$25.00</p>
        <p className="texto-columna-der-sector-2">21% sobre el precio total</p>
      </div>
    </div>

    <hr />
    <div className="pagina-carrito-sector-3">
      <div className="columna-izq-carrito-sector-3">
        <p className="texto-columna-izq-sector-3">Total incluyendo impuestos</p>
      </div>
      <div className="columna-der-carrito-sector-3">
        <p className="texto-columna-der-sector-3">${((total + 25) * 1.25).toFixed(2)}</p>
      </div>
    </div>

    <hr />
    <div className="pagina-carrito-sector-4">
      <div className="columna-izq-carrito-sector-4">
        <p className="texto-columna-izq-sector-4">Total sin incluir impuestos</p>
      </div>
      <div className="columna-der-carrito-sector-4">
        <p className="texto-columna-der-sector-4">${(total + 25).toFixed(2)}</p>
      </div>
    </div>
    <div className="acciones-carrito">
      <BotonSeguirComprandoCarrito />
      <BotonProcederAPagarCarrito />
    </div>
    </div>
      <div className='certificacion-carrito'>
          <Certificacion />
      </div>
      <ContactaConNosotros />
      <Footer />
    </div>
  );
};

export default PaginaCarrito;