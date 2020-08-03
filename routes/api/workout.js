const workoutController = require('../../controllers/workoutController');
const router = require('express').Router();

router.route('/workouts')
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

router.put('/workouts/:id', workoutController.addExercise);

module.exports = router;