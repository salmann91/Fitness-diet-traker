import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exercise: { type: String, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: Number,
  type: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Workout', workoutSchema);
