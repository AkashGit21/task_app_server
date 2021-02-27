const Channel = require('./channel.model');
const Member = require('../member/member.model');

const myChannels = (_, __, ctx) => {
  let userID = ctx.user._id;
  return Member.find({user: userID}).lean().exec();
}

const createChannel = (_, args) => {
  return Channel.create({
    ...args.input,
  })
  .then( function (){
    return true;
  })
  .catch( function (error){
    console.log(error);
    return false;
  })
}

const resolvers = {
  Query: {
    myChannels,
  },
  Mutation: {
    createChannel,
  }
}
module.exports = resolvers;