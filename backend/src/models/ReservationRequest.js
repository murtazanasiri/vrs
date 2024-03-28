import mongoose from "mongoose";

const reservationRequestSchema = new mongoose.Schema({
  startLocation: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  passengerName: {
    type: String,
    required: true,
  },
  passengerContact: {
    type: Number,
    required: true,
  },
  travelDate: {
    type: Date,
    required: true,
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
    required: false,
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
      type: Number,
      description: "1 means pending, 2 meants rejected, 3 means confirmed",
      default: 1,
    },
    comments: String,
    HODUpdatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  securityApproval: {
    approved: {
      type: Number,
      description: "1 means pending, 2 meants rejected, 3 means confirmed",
      default: 1,
    },
    comments: String,
    securityUpdatedAt: {
      type: Date,
      default: Date.now,
    },
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
  transportUpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ReservationRequest = mongoose.model(
  "ReservationRequest",
  reservationRequestSchema
);
