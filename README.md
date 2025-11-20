# Fitness & Diet Tracker

Full-stack web application for tracking meals and workouts with user authentication.

## Tech Stack
- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT

## Features
- User registration & login with JWT authentication
- Dashboard with CRUD operations for meals and workouts
- User profile management
- Search and date filters
- Responsive UI

## Setup Instructions

### Backend
```bash
cd backend
npm install
# Update .env with your MongoDB URI
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Database
Make sure MongoDB is running locally or update MONGODB_URI in backend/.env

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Meals
- GET /api/meals (with search, startDate, endDate filters)
- POST /api/meals
- PUT /api/meals/:id
- DELETE /api/meals/:id

### Workouts
- GET /api/workouts (with search, type, startDate, endDate filters)
- POST /api/workouts
- PUT /api/workouts/:id
- DELETE /api/workouts/:id

### Users
- GET /api/users/profile
- PUT /api/users/profile

All protected routes require Authorization header: `Bearer <token>`
