const { overArgs } = require('lodash');
const startServer = require('../../server');
const User = require('./user.model');

const viewUser = (_, {id}, ctx) => {
  return User.findOne(id).lean().exec();
}

const allUsers = (_, {page=1, limit=4} ) => {
  let startIndex = (page-1)*limit;
  return User.find().skip(startIndex).limit(limit).lean().exec();
}

const addUser = (_, args ) => {
  return User.create({
    ...args.input,
  })
  .then( function(){
    return true;
  })
  .catch( function(error){
    console.log(error);
    return false;
  })
}

const resolvers = {
  Query: {
    viewUser,
    allUsers,
  },
  Mutation: {
    addUser,
  }
}

module.exports = resolvers;