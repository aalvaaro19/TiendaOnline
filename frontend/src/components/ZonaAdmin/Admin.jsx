import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';

function Admin() {
  const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario después de cerrar sesión

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
      // Aquí deberías eliminar el token del cliente (usualmente en localStorage o cookies)
      localStorage.removeItem('token'); // Si usas localStorage para almacenar el token
      navigate('/'); // Redirige al usuario a la página de inicio o login
    } catch (error) {
      console.error('Error al hacer logout:', error);
      alert('Hubo un error al cerrar sesión');
    }
  };
  return (
    <div className="container mt-5">
      <ul className="list-group">
        <li className="list-group-item">
          <a className="btn btn-primary m-2" href="/admin/usuarios/listar">Listar Usuarios</a>
          <a className="btn btn-secondary m-2" href="/admin/usuarios/crear">Crear Usuario</a>
        </li>
        <li className="list-group-item">
          <a className="btn btn-primary m-2" href="/admin/productos/listar">Listar Productos</a>
          <a className="btn btn-secondary m-2" href="/admin/productos/crear">Crear Producto</a>
        </li>
        <li className="list-group-item">
          <a className="btn btn-primary m-2" href="/admin/resenias/listar">Listar Reseñas</a>
          <a className="btn btn-secondary m-2" href="/admin/resenias/crear">Crear Reseña</a>
        </li>
        <li>
          <button className="btn btn-danger m-2" onClick={handleLogout}>Log out</button>
        </li>
      </ul>
    </div>
  )
}

export default Admin