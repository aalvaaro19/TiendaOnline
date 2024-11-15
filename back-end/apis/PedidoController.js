const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Pedido = require('../Clases/Pedido.js');

router.get('/listarPedidos', (req, res) => {
    connection.query('SELECT * FROM pedidos', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/obtenerPedido/:id', (req, res) => {
    connection.query(`SELECT * FROM pedidos WHERE idPedido = ${req.params.id}`, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

router.post('/crearPedido', (req, res) => {
    const { idUsuario, fecha, total, estado } = req.body;
    connection.query(`INSERT INTO pedidos (fecha, total, estado, idUsuario) VALUES ('${fecha}', '${total}', '${estado}', '${idUsuario}')`, (err, result) => {
        if (err) throw err;
        res.json('Pedido creado');
    });
});

router.post('/actualizarPedido/:id', (req, res) => {
    const { idUsuario, fecha, total, estado } = req.body;
    const pedido = new Pedido(idUsuario, fecha, total, estado);
    connection.query(`UPDATE pedidos SET ? WHERE idPedido = ${req.params.id}`, pedido, (err, result) => {
        if (err) throw err;
        res.json('Pedido actualizado');
    });
});

router.delete('/eliminarPedido/:id', (req, res) => {
    connection.query('DELETE FROM pedidos WHERE idPedido = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json('Pedido deleted');
    });
});

module.exports = router;