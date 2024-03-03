const express = require('express');
const { getPharmacies } = require('../controllers/pharmacyController');

const pharmacyRouter = express.Router();

pharmacyRouter.get('/', getPharmacies);
// pharmacyRouter.post('/', createPharmacy);

module.exports = pharmacyRouter;
