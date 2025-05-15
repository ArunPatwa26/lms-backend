import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";

dotenv.config();

// Call database connection here
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Default middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup
app.use(cors({
    origin: "http://localhost:5173",  // Or your frontend URL
    credentials: true
}));

// Handle favicon.ico requests to avoid 404 errors
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Root route
app.get("/", (req, res) => {
    res.send("LMS Backend is running...");
});

// API routes
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});
