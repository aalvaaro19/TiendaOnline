const express = require('express');
const api = express.Router();
const connection = require('../bd/Conexion.js');
const Carrito = require('../Clases/Carrito.js');

api.get('/listarCarritos', (req, res) => {
  connection.query('SELECT * FROM carrito', (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

api.get('/listarCarritos/:id', (req, res) => {
  connection.query(`SELECT * FROM carrito WHERE idUsuario = ${req.params.id}`, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

api.post('/añadirAlCarrito', (req, res) => {
  const { idUsuario, fecha, total } = req
  const carrito = new Carrito(idUsuario, fecha, total);
  connection.query('INSERT INTO carrito SET ?', carrito, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  }
  );
});

api.post('/actualizarCarrito/:id', (req, res) => {
  const { idUsuario, fecha, total } = req.body;
  const carrito = new Carrito(idUsuario, fecha, total);
  connection.query(`UPDATE carrito SET ? WHERE idUsuario = ${req.params.id}`, carrito, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

api.delete('/eliminarCarrito/:id', (req, res) => {
  connection.query('DELETE FROM carrito WHERE idUsuario = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = api;