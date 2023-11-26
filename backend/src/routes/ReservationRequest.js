import express from "express";
const router = express.Router();

import { ReservationRequest } from "../models/ReservationRequest.js";
import { authMiddleware } from "./users/authMiddleware.js";

export { ReservationRequest as request };
