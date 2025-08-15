// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/employees', employeeController.getAllEmployees);

// Get employee by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Add or update employee (same method handles both)
router.post('/employees', employeeController.addOrUpdateEmployee);

// Delete employee by ID
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
