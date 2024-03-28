import express from "express";
const router = express.Router();
import { authMiddleware } from "./users/authMiddleware.js";
import { ReservationRequest } from "../models/ReservationRequest.js";
import { Role } from "../models/Role.js";

//Get all requests for HOD's department
router.get("/requests", authMiddleware, async (req, res) => {
  try {
    const user = req.userData;
    const role = await Role.findById(user.userRole);

    if (role.name !== "hod") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const requests = await ReservationRequest.find({
      "user.department": user.department,
      status: "created",
    });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// HOD approval
router.put("/approve/:id", authMiddleware, async (req, res) => {
  try {
    const { approved, comments } = req.body;
    const requestId = req.params.id;
    const user = req.userData;

    if (user.roleName !== "hod") {
      return res.status(403).json({ message: "Permission denied" });
    }

    const request = await ReservationRequest.findOne({
      _id: requestId,
      status: "created",
    });

    if (!request) {
      return res
        .status(404)
        .json({ message: "Request not found or already processed" });
    }

    console.log(typeof approved);

    request.hodApproval.approved = approved;
    request.hodApproval.comments = comments;

    if (Number(approved) === 3) {
      request.status = "hodApproved";
    } else {
      request.status = "rejected";
    }

    await request.save();

    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export { router as hodRouter };
