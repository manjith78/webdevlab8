import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  ownerName: String,
  vehicleNumber: String,
  serviceDate: Date,
  nextServiceDate: Date,
  serviceDetails: String
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;