import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Person name="Atiqur Rahman" age="29"></Person>
      </div>
    );
  }
}

export default Welcome;
