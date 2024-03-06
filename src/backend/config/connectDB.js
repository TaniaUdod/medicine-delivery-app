const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    const db = await connect(process.env.DB_HOST);
    console.log('Database connection successful');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
