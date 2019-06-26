import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { Math, Science, English } from '../data/courses';


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>MATH</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>SCIENCE</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>ENGLISH</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`}/> } />
    <Route path={`${match.path}/html`} render={ () => <CourseContainer data={Math} add={this.handleSubmit} /> } />
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={Science} add={this.handleSubmit} />} />
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={English} add={this.handleSubmit} />} />
  </div>
);

export default Courses;
