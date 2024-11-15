class Pedido {
  constructor(idUsuario, fecha, total, estado) {
    this.idUsuario = idUsuario;
    this.fecha = fecha;
    this.total = total;
    this.estado = estado;
  }

  getFecha() {
    return this.fecha;
  };

  getTotal() {
    return this.total;
  };

  getEstado() {
    return this.estado;
  };

  getIdUsuario() {
    return this.idUsuario;
  };

  setFecha(fecha) {
    this.fecha = fecha;
  };

  setTotal(total){
    this.total = total;
  };

  setEstado(estado) {
    this.estado = estado;
  };

  setIdUsuario(idUsuario) {
    this.idUsuario = idUsuario;
  };
}

module.exports = Pedido;