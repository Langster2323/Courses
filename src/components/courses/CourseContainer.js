import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {

  state = {
    title: "",
    description: "",
  };

  onTitleChange = e => {
    this.setState({title: e.target.value});
  }

  onDescriptionChange = e => {
    this.setState({description: e.target.value});
  }

  addCourse = e => {
    e.preventDefault();

    this.props.addCourse(this.state.title);
    this.setState({title: "", description: ""});
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
        <form onSubmit={this.addCourse}>
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} />
        <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} />
        <button type="submit" value="Add Course">Go!</button>
        </form>
      </div>
    );
  }
}

export default CourseContainer;
