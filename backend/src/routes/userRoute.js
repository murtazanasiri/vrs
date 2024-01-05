import express from "express";
const router = express.Router();

import { User } from "../models/User.js";

router.get("/current-user", async (req, res) => {
  const user = await User.findOne({ _id: req.userData.userId });
  res.status(200).json({ user });
});

export { router as getCurrentUser };
