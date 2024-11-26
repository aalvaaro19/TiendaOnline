import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../certificacion/Certificacion.jsx';
import './PaginaFirmadas.css'
import DataFirmadas from '../../Data/Firmadas.json'

function PaginaFirmadas() {
  return (
    <>
        <HeaderProductos />
        <div className='bodyApp'>
        {DataFirmadas.map((shirt) => (
          <Card
            key={shirt.id}
            name={shirt.name}
            description={shirt.description}
            price={shirt.price}
            image={shirt.image}
          />
        ))}
      </div>
        <Certificacion />
        <ContactaConNosotros />
        <Footer />
    </>
  )
}

export default PaginaFirmadas