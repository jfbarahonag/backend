const mongoose = require("mongoose");
const database = require("./database");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = mongoose.connect(database.url, options).then(
  () => console.log("Database connected funciono "),
  (error) => console.error("Database could't be connected to: " + error)
);

module.exports = connection;
