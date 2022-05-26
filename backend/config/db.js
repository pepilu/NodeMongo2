const mongoose = require("mongoose");
//added colors in server.js so we can access it anywhere
//all mongoose functions are asynchronous

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
