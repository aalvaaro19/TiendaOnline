const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '',
    user: 'root',
    password: '',
    database: 'tienda-online'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;