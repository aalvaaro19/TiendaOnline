import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FotosApartados from '../fotosApartado/FotosApartados';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Descripcion from '../descripcion/descripcion';
import EscaleraFotos from '../escaleraFotos/CarruselFotos';
import Certificacion from '../Certificacion/Certificacion';

function PaginaPrincipal() {
  return (
    <div>
        <Header />
        <FotosApartados />
        <Descripcion />
        <EscaleraFotos />
        <Certificacion />
        <ContactaConNosotros />
        <Footer />
    </div>
  )
}

export default PaginaPrincipal