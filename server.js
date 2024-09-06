import express, { json } from "express";
import connectDB from "./config/db.js";
import { config } from "dotenv";
import cors from "cors";
import crudRoutes from "./routes/crudRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import multer from "multer";
import path from "path";
const __dirname = path.resolve();

const upload = multer();

config();
connectDB();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "my-uploads")));

app.use(json());
const corsOptions = {
  origin: "*", // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};
app.use(cors(corsOptions));

app.use("/auth", authRoutes);
app.use("/", crudRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
