import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/url", urlRoutes);

// Server
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
