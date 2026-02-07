# 🚀 Complete Deployment Guide

## ✅ Your App is Already Deployed!

**Frontend:** https://fitness-diet-traker.vercel.app/  
**Backend:** https://fitness-diet-traker.onrender.com  
**Database:** MongoDB Atlas

---

## 🖥️ Local Development

### Start Backend:
```bash
cd backend
npm start
```
Runs on: `http://localhost:5001`

### Start Frontend:
```bash
cd frontend
npm run dev
```
Runs on: `http://localhost:5173`

### Add Dummy Data:
```bash
cd backend
npm run seed
```

---

## 🌐 Production URLs

### Backend API:
- Base: `https://fitness-diet-traker.onrender.com`
- Auth: `https://fitness-diet-traker.onrender.com/api/auth`
- Meals: `https://fitness-diet-traker.onrender.com/api/meals`
- Workouts: `https://fitness-diet-traker.onrender.com/api/workouts`

### Frontend:
- Live App: `https://fitness-diet-traker.vercel.app/`

---

## 🔧 Environment Variables

### Backend (Render):
```
MONGODB_URI=
JWT_SECRET=fitness_tracker_secret_key_2024
PORT=5000
FRONTEND_URL=https://fitness-diet-traker.vercel.app
```

### Frontend (Vercel):
```
VITE_API_URL=https://fitness-diet-traker.onrender.com/api
```

---

## 📝 Deployment Checklist

### MongoDB Atlas:
- [x] Cluster created
- [x] User created
- [x] IP whitelist (0.0.0.0/0)
- [x] Connection string configured

### Render (Backend):
- [x] Service deployed
- [x] Environment variables set
- [x] Auto-deploy from GitHub enabled
- [x] CORS configured

### Vercel (Frontend):
- [x] Project deployed
- [x] Environment variables set
- [x] Auto-deploy from GitHub enabled
- [x] Build settings configured

---

## 🔄 Update Deployment

### Update Backend:
```bash
git add .
git commit -m "Update backend"
git push origin main
```
Render auto-deploys in 3-5 minutes.

### Update Frontend:
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel auto-deploys in 2-3 minutes.

---

## 🐛 Troubleshooting

### Backend not connecting:
1. Check Render logs
2. Verify MongoDB connection string
3. Check environment variables

### Frontend not loading:
1. Check Vercel deployment logs
2. Verify VITE_API_URL is set
3. Clear browser cache

### CORS errors:
1. Check FRONTEND_URL in Render
2. Ensure no trailing slash
3. Redeploy backend

---

## ✅ Everything Working!

Your app is fully deployed and functional! 🎉
