import mongoose from "mongoose";

const reservationRequestSchema = new mongoose.Schema({
  startLocation: {
    name: String,
    type: true,
  },
  destination: {
    name: String,
    type: true,
  },
  purpose: {
    name: String,
    type: true,
  },
  passengerName: {
    name: String,
    type: true,
  },
  travelDate: {
    name: Date,
    type: true,
  },
  startLocation: {
    name: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "created",
      "hodApproved",
      "transportAssigned",
      "securityApproved",
      "rejected",
    ],
    default: "created",
  },
  hodApproval: {
    approved: {
      type: Boolean,
      default: false,
    },
    comments: String,
  },
  securityApproval: {
    approved: {
      type: Boolean,
      default: false,
    },
    comments: String,
  },

  transportAssignment: {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
  },

  comments: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const ReservationRequest = mongoose.model(
  "ReservationRequest",
  reservationRequestSchema
);
