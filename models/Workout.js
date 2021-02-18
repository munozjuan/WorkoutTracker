const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    name: {
        type: String,
    },
    type: {
        type: String,
        trim: true
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
