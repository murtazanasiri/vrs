import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: Number,
    required: true,
  },
  plateNo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
