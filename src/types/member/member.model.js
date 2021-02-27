const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  inChannel: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Channel',
  }
}, {timestamps: true});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;