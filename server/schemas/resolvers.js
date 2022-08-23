require('dotenv').config()
const { AuthenticationError } = require("apollo-server-express");
const { User, Summary} = require("../models");
const fetch = require("node-fetch");
const { signToken } = require("../utils/auth");
const { getAzSummary } = require('../utils/summaryUtils.js')


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('summaries');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('summaries');
    },
    summaries: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Summary.find(params).sort({ createdAt: -1 });
    },
    summary: async (parent, { summaryId }) => {
      return Summary.findOne({ _id: summaryId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('summaries');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getSummary: async (_, data) => {
      console.log(data)
      let {text, sentnum} = data;
      var r = await getAzSummary(text, sentnum);
      return {sentences:r};
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSummary: async (parent, { summaryText }, context) => {
      if (context.user) {
        const summary = await Summary.create({
          summaryText,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { summaries: summary._id } }
        );

        return summary;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
