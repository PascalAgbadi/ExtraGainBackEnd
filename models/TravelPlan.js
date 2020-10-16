const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const TravelPlanSchema = new Schema({
  IsRental : {type: Boolean, default: false},
  AirlineName: { type: String, required: true },
  DepartureCountry: { type: String, required: false },
  DepartureDate: { type: String, required: true },
  DepartureTime: { type: String, required: true },
  ArrivalCountry: { type: String, required: false },
  ArrivalDate: { type: String, required: true },
  ArrivalTime: { type: String, required: true },
  LuggageSpace: { type: String, required: true },
  User: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}
});

module.exports = mongoose.model("TravelPlans", TravelPlanSchema);


