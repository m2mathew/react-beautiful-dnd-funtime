// External Dependencies
import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

// Internal Dependencies
import Board from './board';
import List from './list';
import logo from './logo.svg';
import './App.css';

// Local Variables
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>'react-beautiful-dnd' === FUN TIME</h2>
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
