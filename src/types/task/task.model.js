const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  inChannel: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Channel',
  }
}, { timestamps: true})

const Task = mongoose.model('task', taskSchema)

module.exports = Task ;