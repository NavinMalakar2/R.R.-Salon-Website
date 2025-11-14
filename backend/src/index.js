import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import cors from 'cors';
import adminRouter from "./routes/admin.route.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });




// Use FRONTEND_URL from env; allow localhost in dev
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
// Initialize app
const app = express();


// app.use(cors(corsOptions));
const allowedOrigins = [
  "https://r-r-salon-website-1.onrender.com", // frontend (Render)
  "http://localhost:5173" // local dev (optional)
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);



// Middleware for parsing JSON
app.use(express.json());


// API routes
app.use('/api/v1/user',userRouter);
app.use("/api/v1/admin", adminRouter);




// Default route
app.get('/', (req, res) => {
    res.send('server is runing');
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Database connection
        connectDB();
});

