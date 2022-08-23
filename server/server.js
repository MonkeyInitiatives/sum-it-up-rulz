const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*"
  },
  context: authMiddleware
});



//  app.use(cors({
//    origin: '*'
//  }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client'));
});

const startApolloServer = async(typeDefs, resolvers)=> {

  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });

});
}


startApolloServer(typeDefs, resolvers)