import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../Certificacion/Certificacion.jsx';
import './PaginaColaboraciones.css'
import DataColabos from '../../Data/Exclusivas.json'

function PaginaColaboraciones() {
  return (
    <>
        <HeaderProductos />
        <div className='bodyApp'>
        {DataColabos.map((camiseta) => (
          <Card
            key={camiseta.id}
            name={camiseta.name}
            description={camiseta.description}
            price={camiseta.price}
            carpeta={camiseta.carpeta}
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

export default PaginaColaboraciones