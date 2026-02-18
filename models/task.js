const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema(
    { title: String,
      completed: {
        type: Boolean,
        default: false
      }
    },{ timestamps: true}
);

const task = mongoose.model('task', taskSchema);

module.exports = task;