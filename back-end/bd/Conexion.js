const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tienda_online'
});
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Conectar al cliente de MongoDB
// client.connect(err => {
//   if (err) {
//     console.error('Error al conectar a la base de datos: ', err);
//     return;
//   }
//   console.log('Conexión exitosa a la base de datos MongoDB');
//   const db = client.db('TiendaOnline');  // Aquí especificamos la base de datos
//   module.exports = db;  // Exportamos la conexión a la base de datos
// });

