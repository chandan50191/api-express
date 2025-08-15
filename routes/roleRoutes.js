const express = require('express');
const router = express.Router();
const { getAllRoles } = require('../controllers/roleController');

// Define the GET route
router.get('/roles', getAllRoles);

module.exports = router;
