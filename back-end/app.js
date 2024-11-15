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
    
    configureMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors()); // Corregido aquí
    }
    
    // Configura las rutas de la aplicación
    configureRoutes() {
    this.app.use('/api', UsuarioController);
    this.app.use('/api', PedidoController);
    this.app.use('/api', ProductoController);
    this.app.use('/api', ReseñaController);
    this.app.use('/api', CarritoController);
   }
    // Inicia el servidor
    start() {
      this.app.listen(this.port, () => {
        console.log(`Servidor iniciado en el puerto ${this.port}`);
      });
    }
}

const server = new Server(5000); // Puedes cambiar el número de puerto según tu preferencia
server.start();