require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.mongoUrl);

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  workinglocation: {
    type: String,
  },
  workingcompany: {
    type: String,
  },
  batch: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel,
};
