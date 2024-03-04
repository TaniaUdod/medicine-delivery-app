const Order = require('../models/order.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const addOrder = async (req, res, next) => {
  const { name, email, phone, address, title, quantity, price, totalPrice } =
    req.body;
  const newOrder = new Order({
    name,
    email,
    phone,
    address,
    title,
    quantity,
    price,
    totalPrice,
  });
  await newOrder.save();

  res.status(201).json({ message: 'Order saved successfully' });
};

module.exports = { addOrder: ctrlWrapper(addOrder) };
