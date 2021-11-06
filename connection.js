const mongoose = require("mongoose");
// const database = require("./database");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = mongoose.connect(process.env.MONGODB_URI, options).then(
  () => console.log("Database connected funciono "),
  (error) => console.error("Database could't be connected to: " + error)
);

module.exports = connection;
