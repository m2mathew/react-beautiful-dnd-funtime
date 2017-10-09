// External Dependencies
import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Panel,
} from 'react-bootstrap';

// Internal Dependencies

// Local Variables
const listContainerStyles = {
  margin: 32,
  width: 500,
}

const listItemStyles = {
  marginTop: 8,
};

const listOfMuppets = [
  { name: 'Animal' },
  { name: 'Kermit' },
  { name: 'Ms. Piggy' },
  { name: 'Gonzo' },
  { name: 'Fozzy' },
  { name: '80s Robot' },
]

// Component Definition
class List extends Component {
  getListItems = () => {
    return listOfMuppets.map(m =>
      <ListGroupItem
        key={m.name}
        style={listItemStyles}
      >
        {m.name}
      </ListGroupItem>
    );
  }

  render() {
    const title = (
      <h3>LIST</h3>
    );
    return (
      <div style={listContainerStyles}>
        <Panel
          bsStyle="primary"
          header={title}
        >
          <ListGroup>
            {this.getListItems()}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default List;
