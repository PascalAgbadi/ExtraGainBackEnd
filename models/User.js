const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  IsAdmin: { type: Boolean, default: false },
  FirstName: { type: String, required: true },
  MiddleName: { type: String, required: false },
  LastName: { type: String, required: true },
  TelNumber: { type: String, required: true },
  DateOfBirth: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UserSchema);
