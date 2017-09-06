import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Home from './Home';

const App = () => (
  //root router that listens to URL changes
  <BrowserRouter>
    <div className="container">
    //Render components via the route user defined component
      <Route path="" component{}/>
    </div>
  </BrowserRouter>
);

export default App;
