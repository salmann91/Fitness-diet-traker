export const validateMeal = (req, res, next) => {
  const { name, calories } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Meal name is required and must be a string' });
  }
  if (!calories || typeof calories !== 'number' || calories < 0) {
    return res.status(400).json({ error: 'Calories must be a positive number' });
  }
  next();
};

export const validateWorkout = (req, res, next) => {
  const { exercise, duration } = req.body;
  if (!exercise || typeof exercise !== 'string') {
    return res.status(400).json({ error: 'Exercise name is required and must be a string' });
  }
  if (!duration || typeof duration !== 'number' || duration < 0) {
    return res.status(400).json({ error: 'Duration must be a positive number' });
  }
  next();
};
