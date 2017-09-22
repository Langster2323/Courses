import React from 'react';
import { Link } 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><Link to="#">Home</Link></li>
      <li><Link to="#">About</Link></li>
      <li><Link to="#">Teachers</Link></li>
      <li><Link to="#">Courses</Link></li>
    </ul>
  </header>
);

export default Header;
