class Resenia {
  constructor(idUsuario, idProducto, calificacion, comentario, fecha) {
    this.idUsuario = idUsuario;
    this.idProducto = idProducto;
    this.calificacion = calificacion;
    this.comentario = comentario;
    this.fecha = fecha;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
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

module.exports = Resenia;
