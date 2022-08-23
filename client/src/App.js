import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Summary from './pages/summary';
import AuthService from './utils/auth';
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  const loggedIn = AuthService.loggedIn()
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {loggedIn && <Route exact path="/profile" element={<Profile/>} />  }
          {loggedIn && <Route exact path="/summary" element={<Summary/>} />  }
          <Route element={<NoMatch/>} />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}
export default App;