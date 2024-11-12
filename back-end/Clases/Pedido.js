class Pedido {
  constructor(id, fecha, total, estado, idUsuario) {
    this.id = id;
    this.fecha = fecha;
    this.total = total;
    this.estado = estado;
    this.idUsuario = idUsuario;
  }

    getId() {
      return this.id;
    };

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

    setId(id) {
      this.id = id;
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