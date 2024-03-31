import express, { request } from "express";
const router = express.Router();
import { authMiddleware } from "./users/authMiddleware.js";
import { ReservationRequest } from "../models/ReservationRequest.js";
import { Role } from "../models/Role.js";

// Get all request for security approval
router.get("/requests", authMiddleware, async (req, res) => {
  try {
    const user = req.userData;
    const role = await Role.findById(user.userRole);

    if (role.name !== "security") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const requests = await ReservationRequest.find({
      status: "transportAssigned",
    });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Security approval
router.put("/approve/:id", authMiddleware, async (req, res) => {
  try {
    const { approved, comments } = req.body;
    const requestId = req.params.id;

    const request = await ReservationRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.securityApproval.approved = approved;
    request.securityApproval.comments = comments;
    request.status = approved === 3 ? "securityApproved" : "rejected";

    await request.save();

    res.json(request);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { router as securityRouter };
