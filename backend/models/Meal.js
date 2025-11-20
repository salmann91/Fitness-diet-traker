import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: Number,
  carbs: Number,
  fats: Number,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Meal', mealSchema);
