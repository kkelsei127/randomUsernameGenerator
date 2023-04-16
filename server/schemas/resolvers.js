const { Username } = require('../models');

const resolvers = {
  Query: {
    usernames: async () => {
      return Username.find().sort({ createdAt: -1 });
    },

    username: async (parent, { usernameId }) => {
      return Username.findOne({ _id: usernameId });
    },
  }
};

module.exports = resolvers;
