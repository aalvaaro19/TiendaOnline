class Carrito {
    constructor(idCarrito, idUsuario, idProducto, cantidad, precio) {
        this.idCarrito = idCarrito;
        this.idUsuario = idUsuario;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.productos = [];
    }

    getIdCarrito() {
        return this.idCarrito;
    }

    getIdUsuario() {
        return this.idUsuario;
    }

    getIdProducto() {
        return this.idProducto;
    }

    getCantidad() {
        return this.cantidad;
    }

    getPrecio() {
        return this.precio;
    }

    getProductos() {
        return this.productos;
    }

    setIdCarrito(idCarrito) {
        this.idCarrito = idCarrito;
    }

    setIdUsuario(idUsuario) {
        this.idUsuario = idUsuario;
    }

    setIdProducto(idProducto) {
        this.idProducto = idProducto;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    setProductos(productos) {
        this.productos = productos;
    }
}