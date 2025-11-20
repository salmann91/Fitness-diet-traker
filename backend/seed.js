import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Meal from './models/Meal.js';
import Workout from './models/Workout.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await User.deleteMany({});
    await Meal.deleteMany({});
    await Workout.deleteMany({});

    // Create demo user
    const user = new User({
      name: 'Demo User',
      email: 'demo@example.com',
      password: 'demo123',
      age: 25,
      weight: 70,
      height: 175,
      goal: 'Weight Loss'
    });
    await user.save();
    console.log('Demo user created: demo@example.com / demo123');

    // Create meals
    const meals = [
      { name: 'Oatmeal with Berries', calories: 350, protein: 12, carbs: 58, fats: 8 },
      { name: 'Grilled Chicken Salad', calories: 420, protein: 35, carbs: 25, fats: 18 },
      { name: 'Salmon with Rice', calories: 550, protein: 40, carbs: 45, fats: 22 },
      { name: 'Greek Yogurt & Nuts', calories: 280, protein: 18, carbs: 20, fats: 14 },
      { name: 'Protein Smoothie', calories: 320, protein: 28, carbs: 35, fats: 8 },
      { name: 'Egg White Omelette', calories: 220, protein: 24, carbs: 8, fats: 10 },
      { name: 'Quinoa Bowl', calories: 480, protein: 18, carbs: 62, fats: 16 },
      { name: 'Tuna Sandwich', calories: 380, protein: 30, carbs: 42, fats: 12 }
    ];

    for (let i = 0; i < meals.length; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      await Meal.create({ ...meals[i], userId: user._id, date });
    }
    console.log('8 meals created');

    // Create workouts
    const workouts = [
      { exercise: 'Running', duration: 30, caloriesBurned: 300, type: 'Cardio' },
      { exercise: 'Weight Training', duration: 45, caloriesBurned: 250, type: 'Strength' },
      { exercise: 'Cycling', duration: 40, caloriesBurned: 350, type: 'Cardio' },
      { exercise: 'Yoga', duration: 60, caloriesBurned: 180, type: 'Flexibility' },
      { exercise: 'Swimming', duration: 35, caloriesBurned: 400, type: 'Cardio' },
      { exercise: 'Push-ups & Squats', duration: 25, caloriesBurned: 200, type: 'Strength' },
      { exercise: 'Basketball', duration: 50, caloriesBurned: 450, type: 'Sports' },
      { exercise: 'Jump Rope', duration: 20, caloriesBurned: 220, type: 'Cardio' }
    ];

    for (let i = 0; i < workouts.length; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      await Workout.create({ ...workouts[i], userId: user._id, date });
    }
    console.log('8 workouts created');

    console.log('\n✅ Seed data created successfully!');
    console.log('Login with: demo@example.com / demo123');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedData();
