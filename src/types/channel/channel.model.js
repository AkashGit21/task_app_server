const mongoose = require('mongoose')

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  group: {
    isGroup: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    admin: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
    }],
  }
}, { timestamps: true });

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;