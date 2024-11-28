import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../Certificacion/Certificacion.jsx';
import './PaginaRetro.css'
import DataRetro from '../../Data/Retro.json'

function PaginaRetro() {
  return (
    <>
        <HeaderProductos />
        <div className='bodyApp'>
        {DataRetro.map((shirt) => (
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

export default PaginaRetro