import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function CrearResenia() {
  const navigate = useNavigate();
  const { idResenia } = useParams(); // Para obtener el ID de la reseña si estamos editando
  
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    idUsuario: '',
    idProducto: '',
    comentario: '',
    calificacion: '',
    fecha: '',
  });

  // Obtener los datos de la reseña si estamos editando
  useEffect(() => {
    if (idResenia) {
      const fetchReseniaData = async () => {
        try {
          console.log(idResenia);
          // Obtener la reseña existente a través del ID
          const response = await axios.get(`http://localhost:5000/api/obtenerResenia/${idResenia}`);
          console.log(response.data[0]);
          setFormData(response.data[0]); // Rellenar los campos del formulario con los datos obtenidos
        } catch (error) {
          console.error('Error al obtener los datos de la reseña:', error);
        }
      };
      fetchReseniaData();
    }
  }, [idResenia]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    try {
      if (idResenia) {
        // Si estamos editando la reseña
        const response = await axios.post(`http://localhost:5000/api/actualizarResenia/${idResenia}`, formData);
        console.log(response.data);
        navigate('/admin/resenias/listar'); // Redirigir después de actualizar
      } else {
        // Si estamos creando una nueva reseña
        const response = await axios.post('http://localhost:5000/api/crearResenia', formData);
        console.log(response.data);
        navigate('/admin/resenias/listar'); // Redirigir después de crear
      }
    } catch (error) {
      console.error('Error al crear o actualizar la reseña:', error);
      alert('Hubo un error al procesar la reseña');
    }
  };

  return (
    <div className="container mt-5">
      <h2>{idResenia ? 'Actualizar Reseña' : 'Crear Reseña'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="idUsuario" className="form-label">ID Usuario</label>
          <input
            type="text"
            className="form-control"
            id="idUsuario"
            name="idUsuario"
            value={formData.idUsuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idProducto" className="form-label">ID Producto</label>
          <input
            type="text"
            className="form-control"
            id="idProducto"
            name="idProducto"
            value={formData.idProducto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">Comentario</label>
          <textarea
            className="form-control"
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="calificacion" className="form-label">Calificación</label>
          <input
            type="number"
            className="form-control"
            id="calificacion"
            name="calificacion"
            value={formData.calificacion}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{idResenia ? 'Actualizar Reseña' : 'Crear Reseña'}</button>
      </form>
    </div>
  );
}

export default CrearResenia;
