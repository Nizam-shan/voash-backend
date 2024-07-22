import express, { json } from "express";
import connectDB from "./config/db.js";
import { config } from "dotenv";
import cors from "cors";
import crudRoutes from "./routes/crudRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import multer from "multer";

const upload = multer();

config();
connectDB();

const app = express();
app.use("/uploads", express.static("my-uploads"));

app.use(json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/", crudRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));