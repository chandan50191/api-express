// routes/designationRoutes.js

const express = require('express');
const router = express.Router();
const { getAllDesignations, getDesignationById  } = require('../controllers/designationController');

// Define GET route
router.get('/designations', getAllDesignations);
// GET designation by ID
router.get('/designations/:id', getDesignationById);

module.exports = router;
