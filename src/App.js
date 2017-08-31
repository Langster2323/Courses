import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const App = () => (
  //root router that listens to URL changes
  <BrowserRouter>
    <div className="container">
    //Render components via the route user defined component
      <Route />
    </div>
  </BrowserRouter>
);

export default App;
