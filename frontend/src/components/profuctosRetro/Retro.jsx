import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Descripcion from '../descripcion/descripcion';



function Retro() {
  return (
    <div>
        <Header />

        <Descripcion />
        <ContactaConNosotros />
        <Footer />
    </div>
  )
}

export default Retro