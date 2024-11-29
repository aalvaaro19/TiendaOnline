import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../certificacion/Certificacion.jsx';
import './PaginaRetro.css'
import DataRetro from '../../Data/Retro.json'

function PaginaRetro() {
  return (
    <>
        <HeaderProductos />
        <div className='bodyApp'>
        {DataRetro.map((camiseta) => (
          <Card
            key={camiseta.id}
            name={camiseta.name}
            description={camiseta.description}
            price={camiseta.price}
            image={camiseta.image}
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