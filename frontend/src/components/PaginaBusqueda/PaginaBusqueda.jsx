// PaginaRetro.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx';
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../certificacion/Certificacion.jsx';
import './PaginaBusqueda.css';

function PaginaRetro() {
    const location = useLocation();
    const productos = location.state?.productos || [];

    return (
        <>
            <HeaderProductos />
            <div className='titulo-alineacion'>
                <button className='titulo-favoritos'>RESULTADOS DE LA BUSQUEDA</button>
            </div>
            <div className='bodyAppBusqueda'>
                {productos.length > 0 ? (
                    productos.map((camiseta) => (
                      <Card
                          key={camiseta.idProducto}
                          idProducto={camiseta.idProducto}
                          name={camiseta.nombre}
                          description={camiseta.descripcion}
                          price={camiseta.precio}
                          image={camiseta.imagen}
                          carpeta={camiseta.carpeta}
                      />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
            <Certificacion />
            <ContactaConNosotros />
            <Footer />
        </>
    );
}

export default PaginaRetro;
