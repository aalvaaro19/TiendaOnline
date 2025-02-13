class User {
  constructor(nombreUsuario, nombreCompleto, telefono, direccion, email, password) {
    this.nombreUsuario = nombreUsuario;
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
    this.password = password;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  getNombreUsuario() {
    return this.nombreUsuario;
  }

  getNombreCompleto() {
    return this.nombreCompleto;
  }

  getTelefono() {
    return this.telefono;
  }

  getDireccion() {
    return this.direccion;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  // Métodos de modificación
  setNombreUsuario(nombreUsuario) {
    this.nombreUsuario = nombreUsuario;
  }

  setNombreCompleto(nombreCompleto) {
    this.nombreCompleto = nombreCompleto;
  }

  setTelefono(telefono) {
    this.telefono = telefono;
  }

  setDireccion(direccion) {
    this.direccion = direccion;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }
}

module.exports = User;
