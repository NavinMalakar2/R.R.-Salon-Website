import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import cors from 'cors'

dotenv.config();

// Initialize app
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
// Middleware for parsing JSON
app.use(express.json());


// API routes
app.use('/api/v1/user',userRouter);



// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Database connection
        connectDB();
});



// for add frontend on render
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

