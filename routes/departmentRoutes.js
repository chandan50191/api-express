const express = require('express');
const router = express.Router();
const { getAllDepartments } = require('../controllers/departmentController');

// Define the GET route
router.get('/departments', getAllDepartments);

module.exports = router;
