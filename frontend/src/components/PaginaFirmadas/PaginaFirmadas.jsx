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
        <div className='titulo-alineacion'>
          <button className='titulo-favoritos'>FIRMADAS</button>
        </div>
        <div className='bodyApp'>
        {DataFirmadas.map((camiseta) => (
          <Card
            key={camiseta.id}
            name={camiseta.name}
            description={camiseta.description}
            price={camiseta.price}
            image={camiseta.image}
            carpeta={camiseta.carpeta}
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