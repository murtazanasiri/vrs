import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

import { User } from "../../models/User.js";
import { Role } from "../../models/Role.js";
import { Department } from "../../models/Department.js";
import { createJWT } from "../../utils/tokenUtils.js";
import { authMiddleware } from "./authMiddleware.js";

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const roleName = await Role.findOne({ _id: user.role });

    const token = createJWT({
      userId: user._id,
      role: user.role,
      roleName: roleName.name,
      dep: user.department,
    });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ msg: "user logged in" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Register a new user

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      lastName,
      contactNo,
      email,
      password,
      status,
      roleName,
      departmentName,
    } = req.body;

    // Find or create the new role
    let role = await Role.findOne({ name: roleName });
    if (!role) {
      role = new Role({ name: roleName });
      await role.save();
    }

    // Find or create the department
    let department = await Department.findOne({ name: departmentName });
    if (!department) {
      department = new Department({ name: departmentName });
      await department.save();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      lastName,
      contactNo,
      email,
      password: hashedPassword,
      status,
      role: role._id,
      department: department._id,
    });
    await user.save();
    res.status(200).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get curren user
router.get("/users/current-user", authMiddleware, async (req, res) => {
  const user = await User.findOne({ _id: req.userData.userId });
  const userDetails = user.toJSON();
  res.status(200).json({ user: userDetails });
});

router.get("/logout", (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ message: "user logged out!" });
});

export { router as userRouter };
