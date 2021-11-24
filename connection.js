const mongoose = require("mongoose");
// const database = require("./database");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = mongoose.connect(process.env.MONGODB_URI, options).then(
  () => console.log("Database connected!"),
  (error) => console.error("Database could't be connected to: " + error)
);

module.exports = connection;
