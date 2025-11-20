# Setup Guide - Fix Blank Page Issue

## Steps to Run the Application:

### 1. Start MongoDB
Make sure MongoDB is running on your system.

### 2. Start Backend (Terminal 1)
```bash
cd backend
npm install
npm start
```
You should see: `Server running on port 5000` and `MongoDB connected`

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```
You should see: `Local: http://localhost:5173`

### 4. Open Browser
Go to: `http://localhost:5173`

You should see the Login page with a beautiful gradient background.

## If Page is Still Blank:

1. **Check Browser Console** (F12) for errors
2. **Check Terminal** for build errors
3. **Clear Browser Cache** (Ctrl+Shift+Delete)
4. **Restart Frontend Server**:
   ```bash
   # Stop with Ctrl+C, then:
   npm run dev
   ```

## Expected Flow:
1. Login/Register page appears
2. After login → Dashboard with BMI, Weekly Progress, Meals, Workouts
3. Click Profile → Update user info
4. Click Logout → Back to login

## Common Issues:

### Issue: "Cannot connect to backend"
- Make sure backend is running on port 5000
- Check `backend/.env` has correct MongoDB URI

### Issue: "Blank white page"
- Check browser console for errors
- Make sure all npm packages are installed
- Restart both servers

### Issue: "Tailwind styles not working"
- Run `npm install` in frontend folder
- Check `tailwind.config.js` exists
- Restart frontend server
