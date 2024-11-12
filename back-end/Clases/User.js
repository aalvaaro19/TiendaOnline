class User{
  constructor( nombreUser, nombreCompleto, telefono, direccion, email, password){
    this.nombreUser = nombreUser;
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
    this.password = password;
  }

  getIdUsuario(){
    return this.idUsuario;
  }

  getNombreUser(){
    return this.nombreUser;
  }

  getNombreCompleto(){
    return this.nombreCompleto;
  }

  getTelefono(){
    return this.telefono;
  }

  getDireccion(){
    return this.direccion;
  }

  getCp(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  setIdUsuario(idUsuario){
    this.idUsuario = idUsuario;
  }

  setNombreUser(nombreUser){
    this.nombreUser = nombreUser;
  }

  setNombreCompleto(nombreCompleto){
    this.nombreCompleto = nombreCompleto;
  }

  setTelefono(telefono){
    this.telefono = telefono;
  }

  setDireccion(direccion){
    this.direccion = direccion;
  }

  setCp(email){
    this.email = email;
  }

  setPassword(password){
    this.password = password;
  }

  toString(){
    return `User ID: ${this.idUsuario}, Username: ${this.nombreUser}, Full Name: ${this.nombreCompleto}, Phone: ${this.telefono}, Address: ${this.direccion}, Email: ${this.email}, Password: ${this.password}`;
  }
}

module.exports = User;