import express from "express";
const router = express.Router();

import { ReservationRequest } from "../models/ReservationRequest.js";
import { authMiddleware } from "./users/authMiddleware.js";
import mongoose from "mongoose";

// Create a request
router.post("/new-request", authMiddleware, async (req, res) => {
  try {
    const {
      startLocation,
      destination,
      purpose,
      passengerName,
      passengerContact,
      travelDate,
    } = req.body;

    const user = req.userData;

    const request = new ReservationRequest({
      startLocation,
      destination,
      purpose,
      passengerName,
      passengerContact,
      travelDate,
      user: user.userId,
    });

    await request.save();

    res.status(201).json(request);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all requests for a user
router.get("/", async (req, res) => {
  try {
    console.log(req.userData);
    const user = req.userData;
    const request = await ReservationRequest.find({ user: user.userId });
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit a request for a user
router.put("/:id", async (req, res) => {
  try {
    const { startLocation, destination, purpose, passengerName, travelDate } =
      req.body;
    const requestId = req.params.id;
    const user = req.userData;

    const request = await ReservationRequest.findById(requestId);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // check if the user is the owner of request
    const userObjectId = new mongoose.Types.ObjectId(user.userId);

    if (request.user.toString() !== userObjectId.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    // update the request properties
    request.startLocation = startLocation;
    request.destination = destination;
    request.purpose = purpose;
    request.passengerName = passengerName;
    request.travelDate = travelDate;

    await request.save();

    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a request for user
router.delete("/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const user = req.userData;

    const request = await ReservationRequest.findByIdAndDelete({
      _id: requestId,
      user: user.userId,
    });

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { router as requestRouter };
