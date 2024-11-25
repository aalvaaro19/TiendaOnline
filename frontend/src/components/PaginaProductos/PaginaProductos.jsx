import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Card from '../Card/Card';
import Certificacion from '../certificacion/Certificacion.jsx';

function PaginaPrincipal() {
  return (
    <div>
        <HeaderProductos />
        <Card />
        <Certificacion />
        <ContactaConNosotros />
        <Footer />
    </div>
  )
}

export default PaginaPrincipal