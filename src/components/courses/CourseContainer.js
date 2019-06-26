import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      newCourses: []
    };
  }

  onChange = e => {
    this.setState({ title: e.target.value });
  }

  addCourse = e => {
    e.preventDefault();
    this.setState({
      title: "",
      newCourses: [...this.state.newCourses, this.state.title]
    });
  }

  deleteCourse = (index, e) => {
    const newCourses = Object.assign([], this.state.newCourses);
    newCourses.splice(index, 1);
    this.setState({newCourses: newCourses});
  }

  updateCourse = (id, e) => {
    const index = this.state.newCourses.findIndex((newCourse) => {
      return newCourse.id === id
    });

    const newCourse = Object.assign({}, this.state.newCourses[index]);

    newCourses.title = e.target.value;
    const newCourses = Object.assign([], this.state.newCourses);
    newCourses[index] = newCourse;

    this.setState({newCourses: newCourses})
  }

  render() {
    const {
      data,
      children
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
        <form onSubmit={this.addCourse}>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.onChange} />
        <button type="submit" value="Add Course">Go!</button>
        </form>
        <ul>
        {this.state.newCourses.map((newCourse, index) =>
          <li key={newCourse.id}>{newCourse}<button onClick={this.deleteCourse}>X</button> <input onChange={this.updateCourse} value={children} /></li>
        )}
        </ul>
      </div>
    );
  }
}

export default CourseContainer;
