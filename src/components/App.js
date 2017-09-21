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
import Courses from './Courses';

const App = () => (
  //root router that listens to URL changes
  <BrowserRouter>
    <div className="container">
    //React doesn't render any of the routing components to the DOM. They just manage what's being rendered
    <Header />
      <Route exact path="/" component={Home} />
      //Using render prop over component prom is when I need to pass props to the component I'm rendering
      <Route path="/about" render={ () => <About /> } />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
