const express = require('express');
const api = express.Router();
const connection = require('../bd/Conexion.js');
const Producto = require('../Clases/Producto.js');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'keySecretaDelUsuarioParaTenerSesiones';


api.get('/listarProductos', (req, res) => {
    connection.query('SELECT * FROM productos', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

api.get('/obtenerProducto/:idProducto', (req, res) => {
    const idProducto = req.params.idProducto;

    connection.query(`SELECT * FROM productos WHERE idProducto = ?`, [idProducto], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener el producto' });
        }
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(rows[0]);
    });
});

api.post('/crearProducto', (req, res) => {
    const { nombre, descripcion, precio, stock, imagen } = req.body;
    connection.query(`INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)`,
        [nombre, descripcion, precio, stock, imagen], (err, rows) => {
            if (err) throw err;
            res.json('Producto creado');
        }
    );
});

api.put('/actualizarProducto/:id', (req, res) => {
    const { nombre, descripcion, precio, stock, carpeta, imagen } = req.body;
    const producto = new Producto(nombre, descripcion, precio, stock, carpeta, imagen);

    connection.query(`UPDATE productos SET ? WHERE idProducto = ?`, [producto, req.params.id], (err, rows) => {
        if (err) throw err;
        res.json('Producto actualizado');
    });
});

api.delete('/eliminarProducto/:id', (req, res) => {
    connection.query('DELETE FROM productos WHERE idProducto = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.json('Producto eliminado');
    });
});

api.get('/listarFavoritos/:idUsuario', (req, res) => {
    connection.query(`SELECT idProducto FROM favoritos WHERE idUsuario = ?`, [req.params.idUsuario], (err, favoritos) => {
        if (err) throw err;
        if (favoritos.length === 0) {
            return res.json([]);
        }
        const ids = favoritos.map(fav => fav.idProducto);
        connection.query(`SELECT * FROM productos WHERE idProducto IN (?)`, [ids], (err, productos) => {
            if (err) throw err;
            res.json(productos);
        });
    });
});

api.post('/anadirProductoFavoritos/:idUsuario/:idProducto', (req, res) => {
    // Obtener los parámetros de la URL correctamente
    const idUsuario = req.params.idUsuario;
    const idProducto = req.params.idProducto;

    // Ejecutar la consulta a la base de datos
    connection.query(`INSERT INTO favoritos (idUsuario, idProducto) VALUES (?, ?)`, [idUsuario, idProducto], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al añadir el producto a favoritos' });
            return;
        }
        res.json({ message: 'Producto añadido a favoritos' });
    });
});


api.delete('/eliminarProductoFavoritos/:idUsuario/:idProducto', (req, res) => {
    connection.query('DELETE FROM favoritos WHERE idUsuario = ? AND idProducto = ?', 
        [req.params.idUsuario, req.params.idProducto], (err, rows) => {
            if (err) throw err;
            res.json('Producto eliminado de favoritos');
        }
    );
});

module.exports = api;
