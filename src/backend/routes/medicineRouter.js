const express = require('express');
const {
  addMedicinesToCart,
  deleteMedicines,
  getAllMedicines,
  getOneMedicine,
} = require('../controllers/medicineController');
const isValidId = require('../helpers/validateId.js');

const medicineRouter = express.Router();

medicineRouter.get('/', getAllMedicines);

medicineRouter.get('/:id', isValidId, getOneMedicine);

medicineRouter.post('/:id/add-to-cart', isValidId, addMedicinesToCart);

medicineRouter.delete('/:id', isValidId, deleteMedicines);

module.exports = medicineRouter;
