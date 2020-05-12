import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Age: <span></span>{this.props.age}</div>
        <div>
          <button onClick={this.props.onAgeUp}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch)  => {
  return {
    onAgeUp: () => dispatch({ type: 'ADD', payload: 15 }),
    onAgeDown: () => dispatch({ type: 'SUB', payload: 10 })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);