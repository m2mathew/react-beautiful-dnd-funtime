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
class List extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const title = (
      <h3>LIST</h3>
    );
    return (
      <div style={boardContainerStyles}>
        <Panel
          bsStyle="primary"
          header={title}
        >
          <ListGroup>
            <ListGroupItem>List is here</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default List;
