class Producto{
    constructor(nombre, descripcion, precio, stock, imagen){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    getNombre(){
        return this.nombre;
    }

    getDescripcion(){
        return this.descripcion;
    }

    getPrecio(){
        return this.precio;
    }

    getStock(){
        return this.stock;
    }

    getImagen(){
        return this.imagen;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    setStock(stock){
        this.stock = stock;
    }

    setImagen(imagen){
        this.imagen = imagen;
    }
}

module.exports = Producto;