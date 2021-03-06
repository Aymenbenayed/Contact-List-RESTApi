const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: { type: String },
  password: { type: String },
  phone : {type: Number},
  adress : {type: String},
  role: {
    type: Number, 
    enum: [0,1],
    default: 0,
  },
});

module.exports = User = model("user", UserSchema);