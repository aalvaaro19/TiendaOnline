class User{
  constructor( nombreUsuario, nombreCompleto, telefono, direccion, email, password){
    this.nombreUsuario = nombreUsuario;
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
    this.password = password;
  }

  getIdUsuario(){
    return this.idUsuario;
  }

  getNombreUsuario(){
    return this.nombreUsuario;
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

  getemail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  setIdUsuario(idUsuario){
    this.idUsuario = idUsuario;
  }

  setNombreUsuario(nombreUsuario){
    this.nombreUsuario = nombreUsuario;
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

  setemail(email){
    this.email = email;
  }

  setPassword(password){
    this.password = password;
  }
}

module.exports = User;