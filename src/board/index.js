// External Dependencies
import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Panel,
} from 'react-bootstrap';

// Internal Dependencies

// Local Variables
const boardContainerStyles = {
  margin: 32,
  width: 500,
}

// Component Definition
class Board extends Component {
  render() {
    const title = (
      <h3>BOARD</h3>
    );
    return (
      <div style={boardContainerStyles}>
        <Panel
          bsStyle="primary"
          header={title}
        >
          <ListGroup>
            <ListGroupItem>Board is here</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default Board;
