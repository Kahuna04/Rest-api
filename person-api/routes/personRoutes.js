const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/persons', personController.createPerson);

// Get person by user_id
router.get('/persons/:user_id', personController.getPersonById);

// Update person by user_id
router.put('/persons/:user_id', personController.updatePersonById);

// Delete person by user_id
router.delete('/persons/:user_id', personController.deletePersonById);

module.exports = router;

