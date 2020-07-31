const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {type: Date, required: true},
  exercises: [{
    type: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    weight: {type: Number},
    reps: {type: Number},
    sets: {type: Number},
    distance: {type: Number}
  }]
});

const Book = mongoose.model('Workout', workoutSchema);

module.exports = Book;