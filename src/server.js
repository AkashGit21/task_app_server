const { ApolloServer } = require('apollo-server')

const schema = require('./schema')
const resolvers = require('./resolvers')

const startServer = async () => {

  const server = await new ApolloServer({
    typeDefs: schema ,
    resolvers: resolvers,
  });

  server.listen()
  .then( ({url}) => {
    console.log(`Server started at ${url}`);
  })
  .catch( error => console.log(error) )
}

module.exports = startServer;