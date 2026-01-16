require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.mongoUrl);

const { Schema } = mongoose;



const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String,  },
  name: { type: String, required: true },
  workingCompany: { type: String },
  workingLocation: { type: String },
  contact: { type: String },
  batch: { type: String },
  course: { type: String },
});

const userModel = mongoose.model("user", userSchema);


module.exports = {
  userModel,
};
