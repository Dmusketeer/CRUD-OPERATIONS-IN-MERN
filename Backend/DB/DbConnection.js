const mongoose = require("mongoose");

const DataBaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB Connection is established !!`);
  } catch (error) {
    console.log(`Something went wrong : ${error.message}`);
  }
};

module.exports = DataBaseConnection;
