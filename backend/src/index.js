import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { userRouter } from "./routes/users/auth.js";
import { requestRouter } from "./routes/requests.js";
import { hodRouter } from "./routes/hodRoutes.js";
import { transportRouter } from "./routes/transportRoutes.js";
import { securityRouter } from "./routes/securityRoutes.js";
import { authMiddleware } from "./routes/users/authMiddleware.js";
import { getCurrentUser } from "./routes/userRoute.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000", "http://localhost:4000"],
  })
);

// Include user authentication and registeration routes
app.use("/api/auth", userRouter);
app.use("/api/requests", authMiddleware, requestRouter);
app.use("/api/hod", hodRouter);
app.use("/api/transport", transportRouter);
app.use("/api/security", securityRouter);
app.use("/api/users", authMiddleware, getCurrentUser);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server is runnin on the port ${PORT}`));
