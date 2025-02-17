import React, { useState, useEffect } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './PaginaPago.css';

function PaginaPago() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const idUsuario = decodedToken.id;

      // Hacer la solicitud para obtener el carrito del backend
      fetch(`/carrito/${idUsuario}`)
        .then(response => response.json())
        .then(data => {
          setCarrito(data);
          // Calcular el total del carrito
          const totalCarrito = data.reduce((acc, producto) => acc + producto.subtotal, 0);
          setTotal(totalCarrito);
        })
        .catch(error => {
          console.error('Error al obtener el carrito:', error);
        });
    }
  }, []);

  return (
    <div className='PaginaPago'>
      <Header />
      <main className='contenedor-pago'>
        <section className='detalle-compra'>
          <h2>Resumen del pedido</h2>
          {carrito.length > 0 ? (
            carrito.map((producto) => (
              <div className='resumen' key={producto.idProducto}>
                <p>{producto.nombre}</p>
                <p>${(producto.precioUnitario * producto.cantidad).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <div className='subtotal'>
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <hr />
          <div className='total'>
            <p>Total a pagar</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p>Método de pago verificado</p>
        </section>

        <section className='formulario-pago'>
          <h2>Pago con tarjeta</h2>
          <form>
            <label>
              Correo electrónico
              <input type="email" placeholder="Introduce tu correo electrónico" />
            </label>
            <label>
              Nombre en la tarjeta
              <input type="text" placeholder="Introduce el nombre" />
            </label>
            <label>
              Información de la tarjeta
              <div className='info-tarjeta'>
                <input type="text" placeholder="1234 1234 1234 1234" />
                <input type="text" placeholder="MM / AA" />
                <input type="text" placeholder="CVC" />
              </div>
            </label>
            <label>
              Dirección de facturación
              <select>
                <option>España</option>
                <option>Francia</option>
                <option>Alemania</option>
              </select>
              <input type="text" placeholder="Introduce dirección" />
            </label>
            <button type="submit">Pagar ${total.toFixed(2)}</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PaginaPago;
