//main app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UsuarioController = require('./apis/UserController');
const PedidoController = require('./apis/PedidoController');
const ProductoController = require('./apis/ProductoController');
const ReseñaController = require('./apis/ReseñaController');
const CarritoController = require('./apis/CarritoController');


class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.configureMiddleware();
        this.configureRoutes();
    }
    // Configura los middlewares de Express
    
    configureMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors()); // Corregido aquí
    }
    
    // Configura las rutas de la aplicación
    configureRoutes() {
    this.app.use('/api', UsuarioController); // Usa el enrutador de usuario en la ruta /api
    this.app.use('/api', PedidoController); // Usa el enrutador de pedido en la ruta /api
    this.app.use('/api', ProductoController); // Usa el enrutador de producto en la ruta /api
    this.app.use('/api', ReseñaController); // Usa el enrutador de reseña en la ruta /api
    this.app.use('/api', CarritoController); // Usa el enrutador de carrito en la ruta /api
   }
    // Inicia el servidor
    start() {
      this.app.listen(this.port, () => {
        console.log(`Servidor iniciado en el puerto ${this.port}`);
      });
    }
}
// Crea una instancia de la clase Server y especifica el puerto
const server = new Server(3000); // Puedes cambiar el número de puerto según tu preferencia
// Inicia el servidor
server.start();