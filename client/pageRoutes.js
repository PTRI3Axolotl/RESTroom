import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App.jsx';
import LoginPage from './PageComponents/LoginPage.jsx';
import UserPage from './PageComponents/UserPage.jsx';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <BrowserRouter>
        <Route path="/" exact component={LoginPage} />
        <Route path="/user" component={UserPage} />
    </BrowserRouter>
  </Route>
);