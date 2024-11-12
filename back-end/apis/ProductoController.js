const express = require('express');
const router = express.Router();
const connection = require('../bd/Conexion.js');
const Producto = require('../Clases/Producto.js');

router.get('/listarProductos', (req, res) => {
  connection.query('SELECT * FROM productos', (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

router.get('/listarProductos/:id', (req, res) => {
  connection.query(`SELECT * FROM productos WHERE idProducto = ${req.params.id}`, (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

router.post('/añadirProducto', (req, res) => {
  const { nombre, precio, stock, descripcion, imagen } = req.body;
  const producto = new Producto(nombre, precio, stock, descripcion, imagen);
  connection.query('INSERT INTO productos SET ?', producto, (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

router.post('/actualizarProducto/:id', (req, res) => {
  const { nombre, precio, stock, descripcion, imagen } = req.body;
  const producto = new Producto(nombre, precio, stock, descripcion, imagen);
  connection.query(`UPDATE productos SET ? WHERE idProducto = ${req.params.id}`, producto, (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

router.delete('/eliminarProducto/:id', (req, res) => {
  connection.query('DELETE FROM productos WHERE idProducto = ?', [req.params.id], (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

module.exports = router;