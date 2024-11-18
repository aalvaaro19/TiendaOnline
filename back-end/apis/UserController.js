const express = require('express');
const api = express.api();
const connection = require('../bd/Conexion.js');
const Usuario = require('../Clases/User.js');

api.get('/listarUsuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, rows) => {
        if (err) throw err;
        if (rows.length === 0) {
            res.status(404).json({ message: 'No se encontraron usuarios' });
        } else {
            res.json(rows);
        }
    });
});

api.get('/listarUsuarios/:id', (req, res) => {
    connection.query(`SELECT * FROM usuarios WHERE idUsuario = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

api.post('/crearUsuario', (req, res) => {
    const { nombreUsuario, nombreCompleto, telefono, direccion, email, password } = req.body;
    connection.query(`INSERT INTO usuarios (nombreUsuario, nombreCompleto, telefono, direccion, email, password) VALUES ('${nombreUsuario}', '${nombreCompleto}', '${telefono}', '${direccion}', '${email}', '${password}')`, (err, result) => {
        if (err) throw err;
        res.json('Usuario creado');
    });
});

api.post('/actualizarUsuario/:id', (req, res) => {
    const { nombreUsuario, nombreCompleto, telefono, direccion, email, password } = req.body;
    const usuario = new Usuario(nombreUsuario, nombreCompleto, telefono, direccion, email, password);
    connection.query(`UPDATE usuarios SET ? WHERE idUsuario = ${req.params.id}`, usuario, (err, result) => {
        if (err) throw err;
        res.json('Usuario actualizado');
    });
});

api.delete('/eliminarUsuario/:id', (req, res) => {
    connection.query('DELETE FROM usuarios WHERE idUsuario = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json('Usuario deleted');
    });
});

api.get('/loginUser/:nombreUsuario/:password', (req, res) => {
    const { nombreUsuario, password } = req.params;
    connection.query('SELECT idUsuario FROM usuarios WHERE nombreUsuario = ? AND password = ?', [nombreUsuario, password], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
            res.json(rows[0].idUsuario);
        } else {
            res.json(null);
        }
    });
});

api.get('/getUsuario/:id', (req, res) => {
    connection.query(`SELECT * FROM usuarios WHERE idUsuario = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = api;