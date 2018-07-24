import React from 'react';
import { NavLink } from 'react-router-dom';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink='/courses/html'>HTML</NavLink></li>
        <li><NavLink='/courses/css'>CSS</NavLink></li>
        <li><NavLink='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}
  </div>
);

export default Courses;
