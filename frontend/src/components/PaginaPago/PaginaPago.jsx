import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './PaginaPago.css';

function PaginaPago() {
  return (
    <div className='PaginaPago'>
      <Header />
      <main className='contenedor-pago'>
        <section className='detalle-compra'>
          <h2>Resumen del pedido</h2>
          <div className='resumen'>
            <p>Zidane 1998 - Francia</p>
            <p>120,00 €</p>
          </div>
          <div className='subtotal'>
            <p>Subtotal</p>
            <p>120,00 €</p>
          </div>
          <hr />
          <div className='total'>
            <p>Total a pagar</p>
            <p>120,00 €</p>
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
            <button type="submit">Pagar 120,00 €</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PaginaPago;
