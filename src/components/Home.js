import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

handleSubmit = (e) =>
 {
   e.preventDefault();
   let teacherName = this.name.value;
   let teacherTopic = this.topic.value;
   let path = `teachers/${teacherTopic}/${teacherName}`
   this.props.history.push(path);
 }
  render() {
    return (
      <div className="main-content home">
        <h2>Student Course Directory</h2>
        <p>Learn Math and Science and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from Math to Science to English. Learn to be a great student</p>
        <p>We have thousands of videos created by expert teachers. Our library is continually refreshed with the latest material so you will never fall behind.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref={ (input) => this.name = input }/>
        <input type="text" placeholder="Topic" ref={ (input) => this.topic = input }/>
        <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;
