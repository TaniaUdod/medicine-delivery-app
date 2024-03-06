const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');
const configPath = path.join(__dirname, 'src', 'backend', 'config', '.env');
require('dotenv').config({ path: configPath });

const pharmacyRouter = require('./src/backend/routes/pharmacyRouter.js');
const medicineRouter = require('./src/backend/routes/medicineRouter.js');
const orderRouter = require('./src/backend/routes/orderRouter.js');
const connectDB = require('./src/backend/config/connectDB.js');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/medicines', medicineRouter);
app.use('/pharmacies', pharmacyRouter);
app.use('/order', orderRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

const { PORT } = process.env;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
