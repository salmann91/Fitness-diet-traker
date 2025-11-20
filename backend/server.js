import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import mealRoutes from './routes/meals.js';
import workoutRoutes from './routes/workouts.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
