const Task = require('./task.model');

const channelTasks = (_, __, ctx ) => {
  let channelId = ctx.channel._id;
  return Task.find({inChannel: channelId}).lean().exec();
}

const allTasks = () => {
  return Task.find().lean().exec();
}

const addTask = (_, args) => {
  return Task.create({
    ...args.input,
  })
  .then( function() {
    return true;
  })
  .catch( function(error) {
    console.log(error);
    return false;
  })
}

const resolvers = {
  Query: {
    channelTasks,
    allTasks,
  },
  Mutation: {
    addTask,
  }
}

module.exports = resolvers;