// External Dependencies
import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

// Internal Dependencies
import Board from './board';
import List from './list';
import logo from './logo.svg';
import './App.css';

// Local Variables
const headerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
};

const dragDropContainerStyles = {
  display: 'flex',
};

// Component Definition
class App extends Component {
  onDragStart = () => {
    console.log('START');
  };
  onDragEnd = () => {
    console.log('END');
  };

  render() {
    return (
      <div className="App">
        <div
          className="App-header"
          style={headerStyles}
        >
          <h2>dnd fun time</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <div
            className="drag-drop-container"
            style={dragDropContainerStyles}
          >
            <List />
            <Board />
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
