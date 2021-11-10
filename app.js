const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const router = require("./routes");
const imagesRef = require('./connection-firebase')
const port = process.env.PORT || 4000;

// Connect MongoDB
require("./connection");

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", router);

// Static files route
app.use(express.static("./public"));

// APP STARTER
app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404
app.use((req, res, next) => {
  // next(createError(404))
  res.send("Error 404");
});

// error handler
// app.use(function(err, req, res) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message)
// })
