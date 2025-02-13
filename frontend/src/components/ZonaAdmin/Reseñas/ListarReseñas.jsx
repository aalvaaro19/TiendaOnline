import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListarResenias() {
  // Estado para almacenar las reseñas
  const [resenias, setResenias] = useState([]);
  
  // Estado para manejar el cargando
  const [loading, setLoading] = useState(true);

  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Obtener reseñas cuando el componente se monte
  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listarResenias');
        const reseñasConDatos = await Promise.all(response.data.map(async (resena) => {
          // Obtener usuario y producto a través de sus IDs
          const usuarioResponse = await axios.get(`http://localhost:5000/api//listarUsuarios/${resena.idUsuario}`);
          const productoResponse = await axios.get(`http://localhost:5000/api/obtenerProducto/${resena.idProducto}`);
          
          return {
            ...resena,
            usuario: usuarioResponse.data.nombre, // Asume que el backend te devuelve un campo `nombre` del usuario
            producto: productoResponse.data.nombre, // Asume que el backend te devuelve un campo `nombre` del producto
          };
        }));
        
        setResenias(reseñasConDatos); // Almacena las reseñas con los datos completos de usuario y producto
        setLoading(false); // Deja de cargar
      } catch (err) {
        setError('Hubo un error al cargar las reseñas');
        setLoading(false);
      }
    };
    fetchReseñas();
  }, []);

  const eliminarResenia = (idResenia) => {
    fetch(`http://localhost:5000/api/eliminarResenia/${idResenia}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Si la eliminación fue exitosa, actualizamos la lista de reseñas
        setResenias(resenias.filter(resenia => resenia.idResenia !== idResenia));
        console.log(data.message); // Muestra el mensaje de éxito
      })
      .catch(error => console.error('Error eliminando reseña:', error));
  };


  return (
    <div className="container mt-4">
      <h2>Listar Reseñas</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : resenias.length === 0 ? (
        <p>No hay reseñas registradas.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Usuario</th>
              <th>Calificación</th>
              <th>Comentario</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {resenias.map((resena) => (
              <tr key={resena.idResenia}>
                <td>{resena.idResenia}</td>
                <td>{resena.usuario}</td> {/* Nombre del usuario obtenido */}
                <td>{resena.producto}</td> {/* Nombre del producto obtenido */}
                <td>{resena.calificacion}</td>
                <td>{resena.comentario}</td>
                <td>{new Date(resena.fecha).toLocaleDateString()}</td>
                <td>
                  <a className="btn btn-warning m-2" href={`/admin/resenias/actualizar/${resena.idResenia}`}>Actualizar Reseña</a>
                  <button 
                  className="btn btn-danger m-2" 
                  onClick={() => eliminarResenia(resena.idResenia)}
                >
                  Eliminar Reseña
                </button>
                <a className="btn btn-success m-2" href="/admin">Volver a la pantalla general</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListarResenias;
