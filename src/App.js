// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import Board from './board';
import logo from './logo.svg';
import './App.css';

// Component Definition
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>'react-beautiful-dnd' === FUN TIME</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
