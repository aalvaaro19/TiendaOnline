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
    connection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [req.params.idUsuario], (err, rows) => {
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
    const { idUsuario } = req.params;

    if (!idUsuario) {
        return res.status(400).json({ error: "ID de usuario no proporcionado" });
    }

    const usuario = { nombreUsuario, nombreCompleto, telefono, direccion, email, password };

    const query = 'UPDATE usuarios SET ? WHERE idUsuario = ?';

    connection.query(query, [usuario, idUsuario], (err, result) => {
        if (err) {
            console.error('Error al actualizar el usuario:', err);
            return res.status(500).json({ error: 'Error al actualizar el usuario' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.json({ message: 'Usuario actualizado correctamente' });
    });
});


api.delete('/eliminarUsuario/:idUsuario', (req, res) => {
    connection.query('DELETE FROM usuarios WHERE idUsuario = ?', [req.params.idUsuario], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Usuario eliminado' });
    });
});

api.post('/login', async (req, res) => {
    const { nombreUsuario, password } = req.body;
    if (nombreUsuario === 'admin' && password === 'admin') {
        const token = jwt.sign({ id: 'admin' }, SECRET_KEY);
        res.json({ token, message: 'Bienvenido administrador' });
    } else {
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
                console.log('Usuario recibido: ', nombreUsuario);
                console.log('Contraseña recibida: ', password);
                res.json({ message: 'Usuario o contraseña incorrectos' });
            }
        });
    }
});

api.post('/logout', (req, res) => {
    res.json({ message: 'Logout exitoso, elimine el token en el cliente' });
});

api.get('/getUsuario/:idUsuario', (req, res) => {
    connection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [req.params.idUsuario], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = api;