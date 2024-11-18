const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Reseña = require('../Clases/Reseña.js');

router.get('/listarResenias', (req, res) => {
  connection.query('SELECT * FROM resenias', (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.get('/obtenerResenia/:id', (req, res) => {
  connection.query(`SELECT * FROM resenias WHERE idResenia = ${req.params.id}`, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post('/crearResenia', (req, res) => {
  const { idUsuario, idProducto, comentario, calificacion, fecha } = req.body;
  const reseña = new Reseña(idUsuario, idProducto, calificacion, comentario, fecha);
  connection.query('INSERT INTO resenias SET ?', reseña, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.post('/actualizarResenia/:id', (req, res) => {
  const { idUsuario, idProducto, comentario, calificacion, fecha } = req.body;
  const reseña = new Reseña(idUsuario, idProducto, calificacion, comentario, fecha);
  connection.query(`UPDATE resenias SET ? WHERE idResenia = ${req.params.id}`, reseña, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

router.delete('/eliminarResenia/:id', (req, res) => {
  connection.query('DELETE FROM resenias WHERE idResenia = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;