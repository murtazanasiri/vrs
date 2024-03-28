import express from "express";
const router = express.Router();
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";

router.get("/current-user", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userData.userId }).populate(
      "role"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { router as getCurrentUser };
