import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log("SERVER STARTED"));
