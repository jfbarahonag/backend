const mongoose = require("mongoose");
const { Schema } = mongoose;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const subscriberSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscriber = mongoose.model("subscriber", subscriberSchema);

module.exports = Subscriber;
