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

router.get('/obtenerProducto/:id', (req, res) => {
  connection.query(`SELECT * FROM productos WHERE idProducto = ${req.params.id}`, (err, rows) => {
      if (err) throw err;
      res.json(rows);
  });
});

router.post('/crearProducto', (req, res) => {
  const { nombre, descripcion, precio, stock, imagen } = req.body;
  connection.query(`INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES ('${nombre}', '${descripcion}', '${precio}', '${stock}', '${imagen}')`, (err, rows) => {
      if (err) throw err;
      res.json('Producto creado');
  });
});

router.post('/actualizarProducto/:id', (req, res) => {
  const { nombre, descripcion, precio, stock, imagen } = req.body;
  const producto = new Producto(nombre, descripcion, precio, stock, imagen);
  connection.query(`UPDATE productos SET ? WHERE idProducto = ${req.params.id}`, producto, (err, rows) => {
      if (err) throw err;
      res.json('Producto actualizado');
  });
});

router.delete('/eliminarProducto/:id', (req, res) => {
  connection.query('DELETE FROM productos WHERE idProducto = ?', [req.params.id], (err, rows) => {
      if (err) throw err;
      res.json('Producto eliminado');
  });
});

module.exports = router;