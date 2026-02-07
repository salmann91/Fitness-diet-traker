import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  weight: Number,
  height: Number,
  goal: String,
  dailyCalorieGoal: { type: Number, default: 2000 },
  dailyProteinGoal: { type: Number, default: 150 },
  dailyCarbsGoal: { type: Number, default: 250 },
  dailyFatsGoal: { type: Number, default: 65 }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);
