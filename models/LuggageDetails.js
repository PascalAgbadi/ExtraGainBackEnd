const mongoose = require('mongoose');
const { string } = require('prop-types');

const Schema = mongoose.Schema;
 
const LuggageDetailsSchema = new Schema({
  SerialNumber : {type: string, required: true},
  LuggageDeliveryStatus : {type: string, required: true},
  LuggageOwner: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  LuggageCertifier: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  LuggageReceiver: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}
});

module.exports = mongoose.model("LuggageDetails", LuggageDetailsSchema);


