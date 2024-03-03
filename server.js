const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// import path from 'path';
// import dotenv from 'dotenv';
// dotenv.config({ path: path.join('config', '.env') });

const pharmacyRouter = require('./src/backend/routes/pharmacyRouter.js');
const medicineRouter = require('./src/backend/routes/medicineRouter.js');
const connectDB = require('./src/backend/config/connectDB.js');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
// app.use(express.static('public'));

app.use('/medicines', medicineRouter);
app.use('/pharmacies', pharmacyRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

// const { PORT } = process.env;
const PORT = 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});

// kl7e0SJj64izqj83
