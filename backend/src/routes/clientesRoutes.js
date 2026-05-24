const express = require('express');

const router = express.Router();

const {
  obtenerClientes,
  crearCliente,
  eliminarCliente
} = require('../controllers/clientesController');

const responderMensaje = require('../services/chatbotService');

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Obtener clientes
 */
router.get('/clientes', obtenerClientes);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Crear cliente
 */
router.post('/clientes', crearCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Eliminar cliente
 */
router.delete('/clientes/:id', eliminarCliente);

/**
 * @swagger
 * /chatbot:
 *   post:
 *     summary: Chatbot inteligente
 */
router.post('/chatbot', (req, res) => {

  const { mensaje } = req.body;

  const respuesta = responderMensaje(mensaje);

  res.json({
    respuesta
  });
});

module.exports = router;