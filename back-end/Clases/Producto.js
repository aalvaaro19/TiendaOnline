class Producto{
    constructor(nombre, descripcion, precio, stock, carpeta, imagen){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.carpeta = carpeta;
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
    getCarpeta(){
        return this.carpeta;
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
    setCarpeta(carpeta){
        this.carpeta = carpeta;
    }
    setImagen(imagen){
        this.imagen = imagen;
    }
}

module.exports = Producto;