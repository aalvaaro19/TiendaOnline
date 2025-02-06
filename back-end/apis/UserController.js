const express = require('express');
const jwt = require('jsonwebtoken');
const api = express.Router();
const connection = require('../bd/Conexion.js');
const Usuario = require('../Clases/User.js');

const SECRET_KEY = 'keySecretaDelUsuarioParaTenerSesiones';

api.get('/listarUsuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, rows) => {
        if (err) throw err;
        res.json(rows.length > 0 ? rows : { message: 'No se encontraron usuarios' });
    });
});

api.get('/listarUsuarios/:idUsuario', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

api.post('/crearUsuario', (req, res) => {
    const { nombreUsuario, nombreCompleto, telefono, direccion, email, password } = req.body;
    
    connection.query(
        'INSERT INTO usuarios (nombreUsuario, nombreCompleto, telefono, direccion, email, password) VALUES (?, ?, ?, ?, ?, ?)',
        [nombreUsuario, nombreCompleto, telefono, direccion, email, password],
        (err, result) => {
            if (err) throw err;
            res.json({ message: 'Usuario creado' });
        }
    );
});

api.put('/actualizarUsuario/:idUsuario', (req, res) => {
    const { nombreUsuario, nombreCompleto, telefono, direccion, email, password } = req.body;
    const usuario = new Usuario(nombreUsuario, nombreCompleto, telefono, direccion, email, password);
    connection.query('UPDATE usuarios SET ? WHERE idUsuario = ?', [usuario, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Usuario actualizado' });
    });
});

api.delete('/eliminarUsuario/:idUsuario', (req, res) => {
    connection.query('DELETE FROM usuarios WHERE idUsuario = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Usuario eliminado' });
    });
});

api.post('/login', async (req, res) => {
    const { nombreUsuario, password } = req.body;
    connection.query('SELECT * FROM usuarios WHERE nombreUsuario = ?', [nombreUsuario], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
            const usuario = rows[0];
            if (password === usuario.password) {
                console.log('Usuario recibido: ', usuario);
                console.log('Contraseña recibida: ', password);
                const token = jwt.sign({ id: usuario.idUsuario }, SECRET_KEY);
                res.json({ token });
            } else {
                console.log('Usuario recibido: ', usuario);
                console.log('Contraseña recibida: ', password);
                res.json({ message: 'Usuario o contraseña incorrectos' });
            }
        } else {
            console.log('Usuario recibido: ', usuario);
            console.log('Contraseña recibida: ', password);
            res.json({ message: 'Usuario o contraseña incorrectos' });
        }
    });
});

api.post('/logout', (req, res) => {
    res.json({ message: 'Logout exitoso, elimine el token en el cliente' });
});

api.get('/getUsuario/:idUsuario', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = api;