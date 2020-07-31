const router = require('express').Router();
const workoutRoutes = require("./workout");

// Workout routes
router.use("/workouts", workoutRoutes);

module.exports = router;