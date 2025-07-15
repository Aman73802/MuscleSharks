const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is Connected");
  } catch (error) {
    console.log("Failed to Connect DataBase", error);
  }
};

module.exports = dbConnection;
