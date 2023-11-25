import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

import { User } from "../../models/User.js";
import { Role } from "../../models/Role.js";
import { Department } from "../../models/Department.js";

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

    const token = jwt.sign(
      { userId: user._id, role: user.role, department: user.department },
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMDkwMjQ4NiwiaWF0IjoxNzAwOTAyNDg2fQ.LELnCK83n8tacY6SRQXu4CfOd0nGvp2xoRhHy53Wthw",
      { expiresIn: "1h" }
    );
    res.json({ token });
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

export { router as userRouter };
