import express from "express";
const router = express.Router();
import { authMiddleware } from "./users/authMiddleware.js";
import { ReservationRequest } from "../models/ReservationRequest.js";
import { Vehicle } from "../models/Vehicle.js";
import { Driver } from "../models/Driver.js";
import { Role } from "../models/Role.js";

// Get all approved requests for transport assignment
router.get("/requests", authMiddleware, async (req, res) => {
  try {
    const user = req.userData;
    const role = await Role.findById(user.userRole);

    if (role.name !== "transport") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const request = await ReservationRequest.find({
      status: "hodApproved",
    });

    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Assigning Driver and Vehicle to the request
router.put("/assign/:id", authMiddleware, async (req, res) => {
  try {
    const { vehicleId, driverId } = req.body;
    const requestId = req.params.id;
    const user = req.userData;
    const role = await Role.findById(user.userRole);

    if (role.name !== "transport") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const request = await ReservationRequest.findOne({
      _id: requestId,
      status: "hodApproved",
    });

    if (!request) {
      return res
        .status(404)
        .json({ message: "Request not found or not apporved by HOD" });
    }

    const vehicle = await Vehicle.findById(vehicleId);
    const driver = await Driver.findById(driverId);

    if (!vehicle || !driver) {
      return res.status(404).json({ message: "Vehicle or drvier not found" });
    }

    request.transportAssignment.vehicle = vehicle._id;
    request.transportAssignment.driver = driver._id;
    request.status = "transportAssigned";

    await request.save();

    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export { router as transportRouter };
