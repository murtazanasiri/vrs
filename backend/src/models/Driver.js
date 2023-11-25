import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  licenseNo: {
    type: Number,
    required: true,
  },
});

export const Driver = mongoose.model("Driver", driverSchema);
