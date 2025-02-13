const express = require('express');
const api = express.Router();
const connection = require('../bd/Conexion.js');
const Pedido = require('../Clases/Pedido.js');

api.get('/listarPedidos/:idUsuario', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const query = `
        SELECT p.idPedido, p.fecha, p.total, p.estado,
               u.idUsuario, u.nombre AS nombreUsuario,
               dp.idProducto, pr.nombre AS nombreProducto, dp.cantidad, dp.precio 
        FROM pedidos p
        JOIN usuarios u ON p.idUsuario = u.idUsuario
        JOIN detalle_pedido dp ON p.idPedido = dp.idPedido
        JOIN productos pr ON dp.idProducto = pr.idProducto
        ORDER BY p.fecha DESC
        LIMIT ? OFFSET ?
    `;

    connection.query(query, [parseInt(limit), parseInt(offset)], (err, rows) => {
        if (err) {
            console.error('Error al obtener pedidos:', err);
            return res.status(500).json({ error: 'Error al obtener los pedidos' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'No hay pedidos disponibles' });
        }

        const pedidosMap = new Map();

        rows.forEach(row => {
            if (!pedidosMap.has(row.idPedido)) {
                pedidosMap.set(row.idPedido, {
                    idPedido: row.idPedido,
                    fecha: row.fecha,
                    total: row.total,
                    estado: row.estado,
                    usuario: {
                        idUsuario: row.idUsuario,
                        nombre: row.nombreUsuario
                    },
                    productos: []
                });
            }

            pedidosMap.get(row.idPedido).productos.push({
                idProducto: row.idProducto,
                nombre: row.nombreProducto,
                cantidad: row.cantidad,
                precio: row.precio,
                carpeta: row.carpeta,
                imagen: row.imagen
            });
        });

        const pedidosArray = Array.from(pedidosMap.values());
        res.json(pedidosArray);
    });
});



api.get('/obtenerPedido/:idPedido', (req, res) => {
    const idPedido = parseInt(req.params.id); 

    if (isNaN(idPedido)) {
        return res.status(400).json({ error: 'ID de pedido inválido' });
    }

    const query = `
        SELECT p.idPedido, p.fecha, p.total, p.estado, 
               u.idUsuario, u.nombre AS nombreUsuario,
               dp.idProducto, pr.nombre AS nombreProducto, dp.cantidad, dp.precio 
        FROM pedidos p
        JOIN usuarios u ON p.idUsuario = u.idUsuario
        JOIN detalle_pedido dp ON p.idPedido = dp.idPedido
        JOIN productos pr ON dp.idProducto = pr.idProducto
        WHERE p.idPedido = ?
    `;

    connection.query(query, [idPedido], (err, rows) => {
        if (err) {
            console.error('Error al obtener pedido:', err);
            return res.status(500).json({ error: 'Error al obtener el pedido' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        // Formatear la respuesta para mostrar bien los productos del pedido
        const pedido = {
            idPedido: rows[0].idPedido,
            fecha: rows[0].fecha,
            total: rows[0].total,
            estado: rows[0].estado,
            usuario: {
                idUsuario: rows[0].idUsuario,
                nombre: rows[0].nombreUsuario
            },
            productos: rows.map(row => ({
                idProducto: row.idProducto,
                nombre: row.nombreProducto,
                cantidad: row.cantidad,
                precio: row.precio
            }))
        };

        res.json(pedido);
    });
});

api.post('/crearPedido', (req, res) => {
    const { idUsuario, total, estado, productos } = req.body;

    // Validaciones básicas
    if (!idUsuario || !total || !estado || !Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ error: 'Datos inválidos o faltantes' });
    }

    const queryPedido = `INSERT INTO pedidos (fecha, total, estado, idUsuario) VALUES (NOW(), ?, ?, ?)`;

    connection.query(queryPedido, [total, estado, idUsuario], (err, result) => {
        if (err) {
            console.error('Error al crear pedido:', err);
            return res.status(500).json({ error: 'Error al crear el pedido' });
        }

        const idPedido = result.insertId; // Obtener el ID del pedido recién creado

        // Insertar productos en detalle_pedido
        const queryDetalle = `INSERT INTO detalle_pedido (idPedido, idProducto, cantidad, precio) VALUES ?`;
        const valoresDetalle = productos.map(p => [idPedido, p.idProducto, p.cantidad, p.precio, p.carpeta, p.imagen]);

        connection.query(queryDetalle, [valoresDetalle], (err) => {
            if (err) {
                console.error('Error al insertar productos:', err);
                return res.status(500).json({ error: 'Error al agregar productos al pedido' });
            }

            res.status(201).json({ mensaje: 'Pedido creado con éxito', idPedido });
        });
    });
});


api.put('/actualizarPedido/:idPedido', (req, res) => {
    const idPedido = parseInt(req.params.id);
    const { idUsuario, total, estado, productos } = req.body;

    // Validaciones
    if (isNaN(idPedido) || !idUsuario || !total || !estado || !Array.isArray(productos)) {
        return res.status(400).json({ error: 'Datos inválidos o faltantes' });
    }

    const queryActualizarPedido = `UPDATE pedidos SET idUsuario = ?, total = ?, estado = ? WHERE idPedido = ?`;

    connection.query(queryActualizarPedido, [idUsuario, total, estado, idPedido], (err, result) => {
        if (err) {
            console.error('Error al actualizar pedido:', err);
            return res.status(500).json({ error: 'Error al actualizar el pedido' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        // Primero eliminamos los productos actuales del pedido
        const queryEliminarProductos = `DELETE FROM detalle_pedido WHERE idPedido = ?`;

        connection.query(queryEliminarProductos, [idPedido], (err) => {
            if (err) {
                console.error('Error al eliminar productos del pedido:', err);
                return res.status(500).json({ error: 'Error al actualizar los productos del pedido' });
            }

            // Insertamos los nuevos productos
            const queryInsertarProductos = `INSERT INTO detalle_pedido (idPedido, idProducto, cantidad, precio) VALUES ?`;
            const valoresProductos = productos.map(p => [idPedido, p.idProducto, p.cantidad, p.precio]);

            connection.query(queryInsertarProductos, [valoresProductos], (err) => {
                if (err) {
                    console.error('Error al insertar productos actualizados:', err);
                    return res.status(500).json({ error: 'Error al actualizar los productos del pedido' });
                }

                res.json({ mensaje: 'Pedido actualizado correctamente' });
            });
        });
    });
});


api.delete('/eliminarPedido/:idPedido', (req, res) => {
    const idPedido = parseInt(req.params.id);

    // Validar si el ID es un número válido
    if (isNaN(idPedido)) {
        return res.status(400).json({ error: 'ID de pedido inválido' });
    }

    // Primero eliminamos los productos asociados al pedido
    const queryEliminarProductos = `DELETE FROM detalle_pedido WHERE idPedido = ?`;

    connection.query(queryEliminarProductos, [idPedido], (err) => {
        if (err) {
            console.error('Error al eliminar productos del pedido:', err);
            return res.status(500).json({ error: 'Error al eliminar los productos del pedido' });
        }

        // Luego eliminamos el pedido
        const queryEliminarPedido = `DELETE FROM pedidos WHERE idPedido = ?`;

        connection.query(queryEliminarPedido, [idPedido], (err, result) => {
            if (err) {
                console.error('Error al eliminar pedido:', err);
                return res.status(500).json({ error: 'Error al eliminar el pedido' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Pedido no encontrado' });
            }

            res.json({ mensaje: 'Pedido eliminado correctamente' });
        });
    });
});


api.get('/seguimientoPedido/:idPedido', (req, res) => {
    const idPedido = parseInt(req.params.idPedido);

    // Validación de ID
    if (isNaN(idPedido)) {
        return res.status(400).json({ error: 'ID de pedido inválido' });
    }

    const query = `
        SELECT e.idEstado, e.estado, e.fecha, p.idPedido, p.estado AS estadoActual, p.total, u.nombre AS cliente
        FROM historial_estados e
        JOIN pedidos p ON e.idPedido = p.idPedido
        JOIN usuarios u ON p.idUsuario = u.idUsuario
        WHERE e.idPedido = ?
        ORDER BY e.fecha ASC
    `;

    connection.query(query, [idPedido], (err, rows) => {
        if (err) {
            console.error('Error al obtener seguimiento del pedido:', err);
            return res.status(500).json({ error: 'Error al obtener el seguimiento del pedido' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'No se encontró seguimiento para este pedido' });
        }

        // Estructurar la respuesta con información del pedido y su historial de estados
        const pedidoInfo = {
            idPedido: rows[0].idPedido,
            cliente: rows[0].cliente,
            total: rows[0].total,
            estadoActual: rows[0].estadoActual,
            historial: rows.map(row => ({
                idEstado: row.idEstado,
                estado: row.estado,
                fecha: row.fecha
            }))
        };

        res.json(pedidoInfo);
    });
});


module.exports = api;