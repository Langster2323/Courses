import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';

const App = () => (
  //root router that listens to URL changes
  <BrowserRouter>
    <div className="container">
    //Render components via the route user defined component
    <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
