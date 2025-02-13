import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CrearUsuario() {
  const navigate = useNavigate();
  const { idUsuario } = useParams();
  // Estado para almacenar los datos del formulario 
  const [formData, setFormData] = useState({
    nombreUsuario: '',
    nombreCompleto: '',
    telefono: '',
    direccion: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (idUsuario) {
      const fetchUserData = async () => {
        try {
          console.log('idUsuario:', idUsuario);
          const response = await axios.get(`http://localhost:5000/api/listarUsuarios/${idUsuario}`);
          console.log('Datos del usuario:', response.data);
          setFormData(response.data[0]);
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
        }
      };
      fetchUserData();
    }
  }, [idUsuario]);

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
      // Enviar los datos al servidor usando axios
      const response = await axios.post('http://localhost:3000/crearUsuario', formData);
      console.log(response.data); 
      navigate('/admin');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      alert('Hubo un error al crear el usuario');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/actualizarUsuario/${formData.idUsuario}`, formData);
      console.log(response.data);
      navigate('/admin/usuarios/listar');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      alert('Hubo un error al actualizar el usuario');
    }
  };

  return (
    <div className="container mt-5">
      <h2>{idUsuario ? 'Actualizar Usuario' : 'Crear Usuario'}</h2>
      <form onSubmit={idUsuario ? handleUpdate : handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">Nombre de Usuario</label>
          <input type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" value={formData.nombreUsuario} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="nombreCompleto" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control pe-5"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaEye
              className={`position-absolute top-50 end-0 translate-middle-y me-3 ${showPassword ? 'd-none' : 'cursor-pointer'}`}
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(true)}
            />
            <FaEyeSlash
              className={`position-absolute top-50 end-0 translate-middle-y me-3 ${showPassword ? 'cursor-pointer' : 'd-none'}`}
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(false)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">{idUsuario ? 'Actualizar Usuario' : 'Crear Usuario'}</button>
      </form>
    </div>
  );
}

export default CrearUsuario;