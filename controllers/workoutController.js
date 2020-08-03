const db = require('../models');

module.exports = {
  getAllWorkouts: (req, res) => {
    db.Workout.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addWorkout: (req, res) => {
    db.Workout.create({ _id: req.params.id, ...req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};