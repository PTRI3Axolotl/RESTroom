import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './Components/loginForm.jsx';
import HostPage from './Pages/HostPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import UserPage from './Pages/UserPage.jsx';

const App = () => (
  <Router>
    <Route path="/" exact component={LoginPage} />
    <Route path="/user" component={UserPage} />
    <Route path="/host" component={HostPage} />
  </Router>
);

export default App;
