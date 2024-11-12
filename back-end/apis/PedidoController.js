const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Pedido = require('../Clases/Pedido.js');

router.get('/listarPedidos', (req, res) => {
    connection.query('SELECT * FROM pedido', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/listarPedidos/:id', (req, res) => {
    connection.query(`SELECT * FROM pedido WHERE idPedido = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.post('/crearPedido', (req, res) => {
    const { fecha, total, estado, idUsuario } = req.body;
    connection.query(`INSERT INTO pedido (fecha, total, estado, idUsuario) VALUES ('${fecha}', '${total}', '${estado}', '${idUsuario}')`, (err, result) => {
        if (err) throw err;
        res.json('Pedido creado');
    });
});

router.post('/actualizarPedido2', (req, res) => {
    const { fecha, total, estado, idUsuario, id } = req.body;
    connection.query(`UPDATE pedido SET fecha = ?, total = ?, estado = ?, idUsuario = ? WHERE idPedido = ?`, [fecha, total, estado, idUsuario, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el pedido' });
            return;
        }
        res.json({ message: 'Pedido actualizado' });
    });
});

router.post('/actualizarPedido/:id', (req, res) => {
    const { fecha, total, estado, idUsuario } = req.body;
    const pedido = new Pedido(fecha, total, estado, idUsuario);
    connection.query(`UPDATE pedido SET ? WHERE idPedido = ${req.params.id}`, pedido, (err, result) => {
        if (err) throw err;
        res.json('Pedido actualizado');
    });
});

router.delete('/eliminarPedido/:id', (req, res) => {
    connection.query('DELETE FROM pedido WHERE idPedido = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json('Pedido deleted');
    });
});

module.exports = router;