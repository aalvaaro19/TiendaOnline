const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Reseña = require('../Clases/Reseña.js');

router.get('/listarReseñas', (req, res) => {
  connection.query('SELECT * FROM reseña', (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.get('/listarReseñas/:id', (req, res) => {
  connection.query(`SELECT * FROM reseña WHERE idReseña = ${req.params.id}`, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post('/crearReseña', (req, res) => {
  const { idUsuario, idProducto, calificacion, comentario } = req.body;
  const reseña = new Reseña(idUsuario, idProducto, calificacion, comentario);
  connection.query('INSERT INTO reseña SET ?', reseña, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post('/actualizarReseña/:id', (req, res) => {
  const { idUsuario, idProducto, calificacion, comentario } = req.body;
  const reseña = new Reseña(idUsuario, idProducto, calificacion, comentario);
  connection.query(`UPDATE reseña SET ? WHERE idReseña = ${req.params.id}`, reseña, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.delete('/eliminarReseña/:id', (req, res) => {
  connection.query('DELETE FROM reseña WHERE idReseña = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;