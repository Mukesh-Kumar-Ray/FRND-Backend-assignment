import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import uploadRoute from "./routes/upload.route.js";
import truckRoute from "./routes/truck.route.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/upload", uploadRoute);
app.use("/api/trucks", truckRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;