const mongoose = require("mongoose");
const { Schema } = mongoose;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address 1"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address 2",
    ],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 6,
  },
  status: {
    type: Number,
    default: 1,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "editor"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
