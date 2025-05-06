import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

const app = express();
app.use(express.json()),

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);