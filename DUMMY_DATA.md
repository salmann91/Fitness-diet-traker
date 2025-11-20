# Dummy Data Guide

## How to Add Dummy Data

**Important:** First register a user account, then run:

```bash
cd backend
npm run seed
```

This will add dummy meals and workouts to your registered account.

## What Gets Created:

### 8 Sample Meals
1. Oatmeal with Berries - 350 cal (12g protein, 58g carbs, 8g fats)
2. Grilled Chicken Salad - 420 cal (35g protein, 25g carbs, 18g fats)
3. Salmon with Rice - 550 cal (40g protein, 45g carbs, 22g fats)
4. Greek Yogurt & Nuts - 280 cal (18g protein, 20g carbs, 14g fats)
5. Protein Smoothie - 320 cal (28g protein, 35g carbs, 8g fats)
6. Egg White Omelette - 220 cal (24g protein, 8g carbs, 10g fats)
7. Quinoa Bowl - 480 cal (18g protein, 62g carbs, 16g fats)
8. Tuna Sandwich - 380 cal (30g protein, 42g carbs, 12g fats)

### 8 Sample Workouts
1. Running - 30 min (300 cal burned) - Cardio
2. Weight Training - 45 min (250 cal burned) - Strength
3. Cycling - 40 min (350 cal burned) - Cardio
4. Yoga - 60 min (180 cal burned) - Flexibility
5. Swimming - 35 min (400 cal burned) - Cardio
6. Push-ups & Squats - 25 min (200 cal burned) - Strength
7. Basketball - 50 min (450 cal burned) - Sports
8. Jump Rope - 20 min (220 cal burned) - Cardio

## Quick Start with Dummy Data:

1. **Start backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Start frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Register a new account** in the app

4. **Add dummy data:**
   ```bash
   cd backend
   npm run seed
   ```

5. **Refresh the page and you'll see:**
   - BMI calculated from profile data
   - Weekly progress with 8 meals and 8 workouts
   - All meals and workouts listed
   - Filters working with real data

## Note:
Running `npm run seed` will DELETE all meals and workouts, then add dummy data to your existing user account.
