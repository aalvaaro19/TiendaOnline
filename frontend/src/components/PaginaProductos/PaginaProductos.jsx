import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Card from '../Card/Card';
import Certificacion from '../certificacion/Certificacion.jsx';
import './PaginaProductos.css'

function PaginaPrincipal() {
  return (
    <>
        <HeaderProductos />
        <div className='bodyApp'>
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
                    <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
                    <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
          <Card 
          name='equipacion ajax'
          description='temporada 24/25'
          price='80€'
          />
        </div>
        <Certificacion />
        <ContactaConNosotros />
        <Footer />
    </>
  )
}

export default PaginaPrincipal