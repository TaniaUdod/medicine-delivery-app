const Pharmacy = require('../models/pharmacy.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const getPharmacies = async (req, res, next) => {
  const result = await Pharmacy.find();
  res.status(200).json({ result });
};

// // export const createPharmacy = async (req, res) => {
// //   try {
// //     const { name, contact } = req.body;
// //     const pharmacy = new Pharmacy({ name, contact });
// //     await pharmacy.save();
// //     res.status(201).json({ success: true, data: pharmacy });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // };

module.exports = { getPharmacies: ctrlWrapper(getPharmacies) };
