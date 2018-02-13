import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Actions extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = { showModal: false, };
  }
  render() {
    return (
      <div>
        <center>
          <Button id={`dropdown-size-large-${this.props.item.id}`}
            color="primary" size="sm">Edit</Button>
          &nbsp;&nbsp;
          <Button id={`dropdown-size-large-${this.props.item.id}`}
            color='danger' size="sm">Delete</Button>
        </center>
      </div>
  );
  }
}