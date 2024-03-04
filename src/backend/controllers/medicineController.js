const Medicine = require('../models/medicine.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');
// const HttpError = require('../helpers/HttpError.js');

const getAllMedicines = async (req, res) => {
  const result = await Medicine.find().populate('owner');
  res.status(200).json({ result });
};

// const getOneMedicine = async (req, res) => {
//   const { id } = req.params;
//   const result = await Medicine.findById(id);
//   if (!result) {
//     throw HttpError(404, 'Not found');
//   }
//   res.json(result);
// };

// const addMedicinesToCart = async (req, res) => {
//   const { id } = req.params;
//   const result = await Medicine.findById(id);
//   if (!result) {
//     throw HttpError(404, 'Not found');
//   }
//   res.status(200).json({ message: 'Medicine added to cart successfully' });
// };

// const deleteMedicines = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await Medicine.findByIdAndDelete(id);
//   if (!result) {
//     throw HttpError(404, 'Not found');
//   }
//   res.json(result);
// };

module.exports = {
  getAllMedicines: ctrlWrapper(getAllMedicines),
  // getOneMedicine: ctrlWrapper(getOneMedicine),
  // addMedicinesToCart: ctrlWrapper(addMedicinesToCart),
  // deleteMedicines: ctrlWrapper(deleteMedicines),
};
