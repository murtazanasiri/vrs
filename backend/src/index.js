import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users/auth.js";
import { requestRouter } from "./routes/requests.js";
import { hodRouter } from "./routes/hodRoutes.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Include user authentication and registeration routes
app.use("/api/auth", userRouter);
app.use("/api/requests", requestRouter);
app.use("/api/hod", hodRouter);

mongoose.connect(
  "mongodb+srv://murtaza:nasiri@vrs.l0yq17m.mongodb.net/vrs?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log(`Server is runnin on the port ${PORT}`));
