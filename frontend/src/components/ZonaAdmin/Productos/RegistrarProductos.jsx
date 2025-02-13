import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function RegistrarProductos() {
  const navigate = useNavigate();
  const { idProducto } = useParams();  // Obtén el id del producto para actualizar, si lo hay.

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    carpeta: '',
    imagen: ''
  });

  // Cargar datos del producto si es una actualización
  useEffect(() => {
    if (idProducto) {
      const fetchProductData = async () => {
        try {
          console.log('idProducto:', idProducto);
          const response = await axios.get(`http://localhost:5000/api/obtenerProducto/${idProducto}`);
          console.log('Datos del producto:', response.data);
          setFormData(response.data);
        } catch (error) {
          console.error('Error al obtener los datos del producto:', error);
        }
      };
      fetchProductData();
    }
  }, [idProducto]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario para crear el producto
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    try {
      // Si el producto tiene un id, entonces estamos actualizando
      if (idProducto) {
        const response = await axios.put(`http://localhost:5000/api/actualizarProducto/${idProducto}`, formData);
        console.log(response.data);
        navigate('/admin/productos/listar');  // Redirigir a la lista de productos
      } else {
        // Si no tiene un id, creamos un nuevo producto
        const response = await axios.post('http://localhost:5000/api/crearProducto', formData);
        console.log(response.data);  // Ver el mensaje de éxito
        navigate('/admin/productos/listar');  // Redirigir a la lista de productos
      }
    } catch (error) {
      console.error('Error al crear o actualizar el producto:', error);
      alert('Hubo un error al procesar el producto');
    }
  };

  return (
    <div className="container mt-5">
      <h2>{idProducto ? 'Actualizar Producto' : 'Registrar Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input type="number" step="0.01" className="form-control" id="precio" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="carpeta" className="form-label">Carpeta</label>
          <input type="text" className="form-control" id="carpeta" name="carpeta" value={formData.carpeta} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Imagen</label>
          <input type="text" className="form-control" id="imagen" name="imagen" value={formData.imagen} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">{idProducto ? 'Actualizar Producto' : 'Registrar Producto'}</button>
      </form>
    </div>
  );
}

export default RegistrarProductos;
