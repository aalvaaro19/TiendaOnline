const express = require('express');
const api = express.Router();
const connection = require('../bd/Conexion.js');

api.get('/carrito/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const query = `
    SELECT c.idCarrito, c.idProducto, p.nombre, p.imagen, p.carpeta, p.descripcion, p.precio, p.stock, c.cantidad, c.precioUnitario,
      (c.cantidad * c.precioUnitario) AS subtotal, c.fechaAgregado
    FROM carrito c
    JOIN productos p ON c.idProducto = p.idProducto
    WHERE c.idUsuario = ?
  `;

  connection.query(query, [idUsuario], (err, rows) => {
    if (err) {
      console.error("Error al obtener el carrito:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No se encontró carrito para el usuario' });
    }

    res.json(rows);
  });
});

// Agregar un producto al carrito
api.post('/anadirAlCarrito', (req, res) => {
  const { idUsuario, idProducto, cantidad, precioUnitario } = req.body;
  
  if (!idUsuario || !idProducto || cantidad <= 0 || precioUnitario <= 0) {
    return res.status(400).json({ error: "Todos los campos son obligatorios y deben ser valores válidos." });
  }

  const query = 'INSERT INTO carrito (idUsuario, idProducto, cantidad, precioUnitario) VALUES (?, ?, ?, ?)';
  const values = [idUsuario, idProducto, cantidad, precioUnitario];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error al insertar en el carrito:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }
    res.json({ message: "Producto añadido al carrito", idCarrito: result.insertId });
  });
});

// Actualizar la cantidad de un producto en el carrito
api.put('/actualizarCantidad', (req, res) => {
  const { idUsuario, idProducto, cantidad } = req.body;

  if (!idUsuario || !idProducto || cantidad <= 0) {
    return res.status(400).json({ error: "Datos inválidos" });
  }

  const query = `UPDATE carrito SET cantidad = ? WHERE idUsuario = ? AND idProducto = ?`;
  const values = [cantidad, idUsuario, idProducto];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error al actualizar la cantidad:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }

    res.json({ message: "Cantidad actualizada correctamente" });
  });
});

// Eliminar un producto del carrito de un usuario
api.delete('/eliminarDelCarrito/:idUsuario/:idProducto', (req, res) => {
  const { idUsuario, idProducto } = req.params;

  const query = 'DELETE FROM carrito WHERE idUsuario = ? AND idProducto = ?';

  connection.query(query, [idUsuario, idProducto], (err, result) => {
    if (err) {
      console.error("Error al eliminar del carrito:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }

    res.json({ message: "Producto eliminado del carrito" });
  });
});

// Vaciar el carrito de un usuario
api.delete('/vaciarCarrito/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  const query = `DELETE FROM carrito WHERE idUsuario = ?`;

  connection.query(query, [idUsuario], (err, result) => {
    if (err) {
      console.error("Error al vaciar el carrito:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    res.json({ message: "Carrito vaciado correctamente" });
  });
});

// Finalizar compra (Checkout)
api.post('/finalizarCompra', (req, res) => {
  const { idUsuario } = req.body;

  if (!idUsuario) {
    return res.status(400).json({ error: "Se requiere idUsuario" });
  }

  const insertPedidoQuery = `
    INSERT INTO pedidos (idUsuario, idProducto, cantidad, precioUnitario, total, fechaPedido)
    SELECT idUsuario, idProducto, cantidad, precioUnitario, (cantidad * precioUnitario), NOW()
    FROM carrito WHERE idUsuario = ?
  `;

  connection.query(insertPedidoQuery, [idUsuario], (err, result) => {
    if (err) {
      console.error("Error al finalizar la compra:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    // Vaciar el carrito después de la compra
    connection.query('DELETE FROM carrito WHERE idUsuario = ?', [idUsuario], (err, deleteResult) => {
      if (err) {
        console.error("Error al vaciar el carrito después de la compra:", err);
        return res.status(500).json({ error: "Compra realizada, pero hubo un problema al vaciar el carrito." });
      }

      res.json({ message: "Compra finalizada con éxito" });
    });
  });
});

module.exports = api;
