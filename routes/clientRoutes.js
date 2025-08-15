const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Get all clients
router.get('/clients', clientController.getAllClients);

// Get client by ID
router.get('/clients/:id', clientController.getClientById);

// Add or update client (same method handles both)
router.post('/clients', clientController.addOrUpdateClient);

// Delete client by ID
router.delete('/clients/:id', clientController.deleteClient);

module.exports = router;
