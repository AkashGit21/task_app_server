const { ApolloServer } = require('apollo-server')
const { merge } = require('lodash');
const loadTypeSchema = require('./schema');

const resolvers = require('./resolvers');
const connectDB = require('./db');

const startServer = async () => {

  const types = ['user', 'task', 'channel' ];

  const rootSchema = `
    schema {
      query: Query,
      mutation: Mutation
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const server = await new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: resolvers,
  });

  connectDB()

  server.listen()
  .then( ({url}) => {
    console.log(`Server started at ${url}`);
  })
  .catch( error => console.log(error) )
}

module.exports = startServer;