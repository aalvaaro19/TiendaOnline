class Producto{
    constructor(id, nombre, descripcion,precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }

    getId(){
        return this.id;
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

    setId(id){
        this.id = id;
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
}