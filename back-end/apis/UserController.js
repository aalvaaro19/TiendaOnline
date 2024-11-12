const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Usuario = require('../Clases/User.js');

router.get('/listarUsuarios', (req, res) => {
    connection.query('SELECT * FROM usuario', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/listarUsuarios/:id', (req, res) => {
    connection.query(`SELECT * FROM usuario WHERE idUsuario = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.post('/crearUsuario', (req, res) => {
    const { nombreUser, nombreCompleto, telefono, direccion, cp, password } = req.body;
    connection.query(`INSERT INTO usuario (nombreUser, nombreCompleto, telefono, direccion, cp, password) VALUES ('${nombreUser}', '${nombreCompleto}', '${telefono}', '${direccion}', '${cp}', '${password}')`, (err, result) => {
        if (err) throw err;
        res.json('Usuario creado');
    });
});

router.post('/actualizarUsuario2', (req, res) => {
    const { nombreUser, telefono, direccion, cp,id } = req.body;
    connection.query(`UPDATE usuario SET nombreUser = ?, telefono = ?, direccion = ?, cp = ? WHERE idUsuario = ?`, [nombreUser, telefono, direccion, cp, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
            return;
        }
        res.json({ message: 'Usuario actualizado' });
    });
});

router.post('/actualizarUsuario/:id', (req, res) => {
    const { nombreUser, nombreCompleto, telefono, direccion, cp, password } = req.body;
    const usuario = new Usuario(nombreUser, nombreCompleto, telefono, direccion, cp, password);
    connection.query(`UPDATE usuario SET ? WHERE idUsuario = ${req.params.id}`, usuario, (err, result) => {
        if (err) throw err;
        res.json('Usuario actualizado');
    });
});

router.delete('/eliminarUsuario/:id', (req, res) => {
    connection.query('DELETE FROM usuario WHERE idUsuario = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json('Usuario deleted');
    });
});

router.get('/loginUser/:nombreUser/:password', (req, res) => {
    const { nombreUser, password } = req.params;
    connection.query(`SELECT idUsuario FROM usuario WHERE nombreUser = '${nombreUser}' AND password = '${password}'`, (err, rows) => {
        if (err) throw err;
        if(rows.length > 0){
            res.json(rows[0].idUsuario);
        }else{
            res.json(null);
        }
    });
});

router.get('/getUsuario/:id', (req, res) => {
    connection.query(`SELECT * FROM usuario WHERE idUsuario = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('cambiarPassword/:id/:password', (req, res) => {
    const { id, password } = req.params;
    connection.query(`UPDATE usuario SET password = '${password}' WHERE idUsuario = ${id}`, (err, result) => {
        if (err) throw err;
        res.json('Password actualizado');
    });
});

module.exports = router;