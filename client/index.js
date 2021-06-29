import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { HashRouter } from 'react-router-dom';
import pageRoutes from './pageRoutes';


// render(<App />, document.getElementById('root'));

// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file


render(
  <Router routes={pageRoutes} history={HashRouter} />,
  document.getElementById('root')
);
