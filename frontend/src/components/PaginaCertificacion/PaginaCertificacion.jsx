import React from 'react';
import './PaginaCertificacion.css';
import HeaderAuxiliar from '../HeaderAuxiliar/HeaderAuxiliar';
import procesoProduccion from '../../images/ProcesoProduccion.png';
import materialesCertificacion from '../../images/materialesCertificacion.png';
import controlDeCalidad from '../../images/controlDeCalidad.png';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros';
import Footer from '../footer/Footer';


function PaginaCertificacion() {
  return (
    <>
      <HeaderAuxiliar />
      <main>
        <div className='conjunto-externo'>
          <div className='sector-1'>
            <div className='imagen-sector-1'>
            <img src={materialesCertificacion} alt='materialesCertificacion' className='materialesCertificacion' />
            </div>
            <div className='texto-sector-1'>
              <h2>Materiales Certificados</h2>
              <p>En nuestra empresa, todo comienza con la selección de materiales de calidad superior. Utilizamos algodón orgánico certificado bajo el estándar GOTS (Global Organic Textile Standard) y poliéster reciclado con el sello Global Recycled Standard (GRS). Estas certificaciones garantizan que nuestras camisetas están fabricadas con materiales sostenibles, respetando tanto el medio ambiente como los derechos laborales en su producción.</p>
            </div>
          </div>
          <div className='sector-2'>
            <div className='texto-sector-2'>
              <h2>Proceso de Producción Responsable</h2>
              <p>Cada camiseta pasa por un proceso de producción supervisado que prioriza la sostenibilidad y la calidad. Desde el corte y la confección hasta la aplicación de tintes libres de sustancias nocivas, seguimos estrictos estándares de calidad. Además, trabajamos con fábricas que cumplen normativas internacionales de responsabilidad social, asegurándonos de que cada etapa sea ética y transparente.</p>
            </div>
            <div className='imagen-sector-2'>
              <img src={procesoProduccion} alt='procesoProduccion' className='procesoProduccion' />
            </div>
          </div>
          <div className='sector-3'>
            <div className='imagen-sector-3'>
            <img src={controlDeCalidad} alt='controlDeCalidad' className='controlDeCalidad' />
            </div>
            <div className='texto-sector-3'>              
              <h2>Controles de Calidad Finales</h2>
              <p>Antes de que nuestras camisetas lleguen a ti, pasan por una serie de pruebas rigurosas. Expertos en calidad revisan la resistencia de las costuras, la durabilidad del tejido y la solidez de los colores. Para garantizar la seguridad, colaboramos con laboratorios externos que certifican que nuestras prendas están libres de químicos dañinos. Solo las camisetas que cumplen con nuestros altos estándares llegan a formar parte de nuestra colección.</p>
            </div>
          </div>
        </div>
        <ContactaConNosotros />
        <Footer />
      </main>
    </>
  );
}

export default PaginaCertificacion;