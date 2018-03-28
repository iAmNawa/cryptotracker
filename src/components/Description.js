import React, { Component } from 'react';
import Aux from '../hoc/Aux';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Aux>
        <h1>Search Word: {this.props.searchy}</h1>
        <h1>{this.props.descripty}</h1>
      </Aux>
    )
  }
}

export default Description;
