const mongoose = require('mongoose');
require('dotenv').config();

const dataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connects');
  } catch (error) {
    console.error(error);
    throw new Error('Error in database connection');
  }
};

module.exports = { dataBaseConnection };