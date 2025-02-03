import React from 'react'
import HeaderProductos from '../HeaderProductos/HeaderProductos.jsx'
import Footer from '../footer/Footer.jsx';
import ContactaConNosotros from '../ContactaConNosotros/ContactaConNosotros.jsx';
import Card from '../Card/Card.jsx';
import Certificacion from '../certificacion/Certificacion.jsx';
import './PaginaRetro.css'
import { useEffect, useState } from 'react';

function PaginaRetro() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacer la solicitud GET a la API
    fetch('http://localhost:5000/api/listarProductos')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // return (
  //   <>
  //       <HeaderProductos />
  //       <div className='titulo-alineacion'>
  //         <button className='titulo-favoritos'>RETRO</button>
  //       </div>
  //       <div className='bodyApp'>
  //       {DataRetro.map((camiseta) => (
  //         <Card
  //           key={camiseta.id}
  //           name={camiseta.name}
  //           description={camiseta.description}
  //           price={camiseta.price}
  //           image={camiseta.image}
  //           carpeta={camiseta.carpeta}
  //         />
  //       ))}
  //     </div>
  //       <Certificacion />
  //       <ContactaConNosotros />
  //       <Footer />
  //   </>
  // )
  return (
    <>
      <HeaderProductos />
      <div className='titulo-alineacion'>
        <button className='titulo-favoritos'>RETRO</button>
      </div>
      <div className='bodyApp'>
        {data.length > 0 ? (
          data
            .filter((camiseta) => camiseta.carpeta === 'retro')
            .map((camiseta) => (
              <Card
                key={camiseta.idProducto}
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

export default PaginaRetro