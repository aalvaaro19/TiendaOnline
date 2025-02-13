import React from 'react'

function ListarUsuarios() {
  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/listarUsuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error fetching usuarios:', error));
  }, []);

  // Función para eliminar un usuario
  const eliminarUsuario = (idUsuario) => {
    fetch(`http://localhost:5000/api/eliminarUsuario/${idUsuario}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Si la eliminación fue exitosa, actualizamos la lista de usuarios
        setUsuarios(usuarios.filter(usuario => usuario.idUsuario !== idUsuario));
        console.log(data.message); // Muestra el mensaje de éxito
      })
      .catch(error => console.error('Error eliminando usuario:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Listar Usuarios</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Nombre Completo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.idUsuario}>
              <td>{usuario.idUsuario}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.nombreCompleto}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.email}</td>
              <td>
                <a className="btn btn-warning m-2" href={`/admin/usuarios/actualizar/${usuario.idUsuario}`}>Actualizar Usuario</a>
                <button 
                  className="btn btn-danger m-2" 
                  onClick={() => eliminarUsuario(usuario.idUsuario)}
                >
                  Eliminar Usuario
                </button>
                <a className="btn btn-success m-2" href="/admin">Volver a la pantalla general</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListarUsuarios