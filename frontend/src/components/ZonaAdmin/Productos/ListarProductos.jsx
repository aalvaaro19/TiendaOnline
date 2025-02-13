import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('/listarProductos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const eliminarProducto = (idProducto) => {
    fetch(`http://localhost:5000/api/eliminarProducto/${idProducto}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Si la eliminación fue exitosa, actualizamos la lista de usuarios
        setProductos(productos.filter(productos => productos.idUsuario !== idProducto));
        console.log(data.message); // Muestra el mensaje de éxito
      })
      .catch(error => console.error('Error eliminando producto:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Productos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Carpeta</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.carpeta}</td>
              <td><img src={require(`../../../images/${producto.carpeta}/${producto.imagen}.png`)} alt={producto.nombre} width="50" /></td>
              <td>
                <a className="btn btn-warning m-2" href={`/admin/productos/actualizar/${producto.idProducto}`}>Actualizar Producto</a>
                <button 
                  className="btn btn-danger m-2" 
                  onClick={() => eliminarProducto(producto.idProducto)}
                >
                  Eliminar Producto
                </button>
                <a className="btn btn-success m-2" href="/admin">Volver a la pantalla general</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarProductos;