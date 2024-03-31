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

// Get all available drivers
router.get("/drivers", authMiddleware, async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all available vehicles
router.get("/vehicles", authMiddleware, async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Assign driver and vehicle to request
router.put("/assign/:id", authMiddleware, async (req, res) => {
  try {
    const { driver, vehicle, comments } = req.body;
    const requestId = req.params.id;

    const request = await ReservationRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.transportAssignment.driver = driver;
    request.transportAssignment.vehicle = vehicle;
    request.comments = comments;
    request.status = "transportAssigned";

    await request.save();

    res.json(request);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { router as transportRouter };
