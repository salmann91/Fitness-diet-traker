# Minimal Folder Structure

```
FitnessANDDiet_Tracker/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Meal.js
│   │   └── Workout.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── meals.js
│   │   └── workouts.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MealForm.jsx
│   │   │   ├── WorkoutForm.jsx
│   │   │   ├── ItemList.jsx
│   │   │   ├── BMICard.jsx
│   │   │   └── WeeklyProgress.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── README.md
├── Postman_Collection.json
└── SCALING_NOTES.md
```

## Clean & Minimal Structure ✨

- **Backend**: 3 folders (models, routes, middleware)
- **Frontend**: 4 folders (components, pages, context, services)
- **No unnecessary files**: Removed assets, App.css, public folder
- **TailwindCSS**: Modern, responsive UI
- **Total Files**: ~20 essential files only
