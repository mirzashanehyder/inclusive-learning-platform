import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { userRoute } from './APIs/userAPI.js';
import { courseRoute } from './APIs/courseAPI.js';
import { studentRoute } from './APIs/studentAPI.js';
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
  }));
  

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/user-api", userRoute); 
app.use('/course-api',courseRoute);
app.use('/student-api',studentRoute);
app.use("/uploads", express.static("uploads"));


function connectToDBAndStartServer() {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");

        app.listen(process.env.PORT, () => {
            console.log("Server running on port", process.env.PORT);
        });

    } catch (err) {
        console.log("Error in connection:", err.message);
    }
}

connectToDBAndStartServer();
