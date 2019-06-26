import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {
  handleAddCourse = (title, description) => {
    this.setState( prevState => {
      return {
        data: [
          ...prevState.data,
          {
            title: "",
            description: ""
          }
        ]
      };
    });
  }
  render() {
    const {
      data
    } = this.props;

    let courses = data.map((course) => {
      return <Course title={course.title}
                     desc={course.description}
                     key={course.id} />
    });
    return (
      <div>
        <ul>
          {courses}
        </ul>
        <form onSubmit={this.handleAddCourse}>
        <input type="text" placeholder="Name" ref={ (input) => courses.title = input }/>
        <input type="text" placeholder="Topic" ref={ (input) => courses.description = input }/>
        <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default CourseContainer;
