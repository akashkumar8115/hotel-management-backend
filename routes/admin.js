const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getUsers);
router.delete('/users/:id', adminController.deleteUser);
router.post('/hotels', adminController.addHotel);

module.exports = router;
