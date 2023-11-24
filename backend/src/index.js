import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://murtaza:nasiri@vrs.l0yq17m.mongodb.net/vrs?retryWrites=true&w=majority"
);

app.listen(PORT, () => console.log(`Server is runnin on the port ${PORT}`));
