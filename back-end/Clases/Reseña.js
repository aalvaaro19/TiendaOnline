class Reseña {
  constructor(id, idUsuario, idProducto, calificacion, comentario, fecha) {
    this.id = id;
    this.idUsuario = idUsuario;
    this.idProducto = idProducto;
    this.calificacion = calificacion;
    this.comentario = comentario;
    this.fecha = fecha;
  }

  getId() {
    return this.id;
  }

  getIdUsuario() {
    return this.idUsuario;
  }

  getIdProducto() {
    return this.idProducto;
  }

  getCalificacion() {
    return this.calificacion;
  }

  getComentario() {
    return this.comentario;
  }

  getFecha() {
    return this.fecha;
  }

  setId(id) {
    this.id = id;
  }

  setIdUsuario(idUsuario) {
    this.idUsuario = idUsuario;
  }

  setIdProducto(idProducto) {
    this.idProducto = idProducto;
  }

  setCalificacion(calificacion) {
    this.calificacion = calificacion;
  }

  setComentario(comentario) {
    this.comentario = comentario;
  }

  setFecha(fecha) {
    this.fecha = fecha;
  }
}