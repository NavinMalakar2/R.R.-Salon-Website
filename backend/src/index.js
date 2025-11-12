import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import cors from 'cors'

dotenv.config();
// Use FRONTEND_URL from env; allow localhost in dev
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
// Initialize app
const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (origin === FRONTEND_URL || origin.includes('localhost')) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Not allowed by CORS'), false);
  },
  credentials: true,
};
// app.use(cors(corsOptions));
app.use(
  cors({
    origin: ["https://r-r-salon-website-1.onrender.com", "http://localhost:5173"],
    credentials: true,
  })
);

// Middleware for parsing JSON
app.use(express.json());


// API routes
app.use('/api/v1/user',userRouter);



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

