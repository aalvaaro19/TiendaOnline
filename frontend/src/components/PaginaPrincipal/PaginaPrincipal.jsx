import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FotosApartados from '../fotosApartado/FotosApartados';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Descripcion from '../descripcion/descripcion';
import EscaleraFotos from '../escaleraFotos/CarruselFotos';
import Certificacion from '../certificacion/Certificacion';
import './PaginaPrincipal.css';

function PaginaPrincipal() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <div className="pagina-principal">
      <Header />
      <FotosApartados />
      <EscaleraFotos />
      <Descripcion />
      <Certificacion />
      <ContactaConNosotros />
      <Footer />
    </div>
  )
}

export default PaginaPrincipal