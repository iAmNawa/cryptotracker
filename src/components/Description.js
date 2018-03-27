import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Search Word: {this.props.searchy}</h1>
        <h1>{this.props.descripty}</h1>
      </div>
    )
  }
}

export default Description;
