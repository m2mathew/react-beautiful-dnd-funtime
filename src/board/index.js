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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const title = (
      <h3>List 1</h3>
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
