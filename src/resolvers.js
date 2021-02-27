const resolvers = {
  Query: {
    allUsers: () => ([{
      id:1,
      username: "Random",
      email: "random@temp.in",
    }])
  }
}

module.exports = resolvers;