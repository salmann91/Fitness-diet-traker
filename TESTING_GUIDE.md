# 🧪 Testing Guide

## Local Testing

### 1. Start Services
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 2. Test Registration
1. Open `http://localhost:5173`
2. Click "Register"
3. Fill form and submit
4. Should redirect to Dashboard ✅

### 3. Test Login
1. Logout
2. Login with same credentials
3. Should see Dashboard ✅

### 4. Test Meals
1. Type meal name (see suggestions)
2. Fill calories, protein, carbs, fats
3. Click "Add Meal"
4. Should appear in table ✅

### 5. Test Workouts
1. Type exercise name (see suggestions)
2. Fill duration, calories, type
3. Click "Add Workout"
4. Should appear in table ✅

### 6. Test Edit
1. Click "Edit" on any item
2. Change values
3. Click "Save"
4. Should update ✅

### 7. Test Delete
1. Click "Delete" on any item
2. Should remove from list ✅

### 8. Test Search
1. Type in search box
2. Should filter results ✅

### 9. Test Date Filters
1. Select date range
2. Should show items in range ✅

### 10. Test Dark Mode
1. Click moon/sun icon
2. Theme should change ✅

### 11. Test Profile
1. Click "Profile"
2. Update info
3. Click "Update Profile"
4. Should save ✅

---

## Production Testing

Test same features on:
**https://fitness-diet-traker.vercel.app/**

---

## API Testing (Postman/Thunder Client)

### Register:
```
POST https://fitness-diet-traker.onrender.com/api/auth/register
Body: {
  "name": "Test User",
  "email": "test@test.com",
  "password": "test123"
}
```

### Login:
```
POST https://fitness-diet-traker.onrender.com/api/auth/login
Body: {
  "email": "test@test.com",
  "password": "test123"
}
```

### Get Meals (with token):
```
GET https://fitness-diet-traker.onrender.com/api/meals
Headers: {
  "Authorization": "Bearer YOUR_TOKEN"
}
```

---

## ✅ All Tests Passing!

Your app is fully functional! 🎉
