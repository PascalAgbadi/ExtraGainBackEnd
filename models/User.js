const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  IsAdmin : {type: Boolean, default: false},
  Firstname: { type: String, required: true },
  Middlename: { type: String, required: false },
  Lastname: { type: String, required: true },
  Tel: { type: String, required: true },
  DateOfBirth: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UserSchema);