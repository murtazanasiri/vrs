import express from "express";
const router = express.Router();

import { ReservationRequest } from "../models/ReservationRequest.js";
import { authMiddleware } from "./users/authMiddleware.js";

// Create a request
router.post("/", async (req, res) => {
  try {
    const { startLocation, destination, purpose, passengerName, travelDate } =
      req.body;
    const user = req.user;

    const request = new ReservationRequest({
      startLocation,
      destination,
      purpose,
      passengerName,
      travelDate,
    });

    await request.save();

    res.status(201).json(request);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { router as requestRouter };
