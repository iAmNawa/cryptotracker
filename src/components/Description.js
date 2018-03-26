import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'words will be here'
    }
  }


  makeThatCall() {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.description}&format=json&origin=*`);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({description: request.response[2]})
      console.log(request.response)
    }.bind(this)
    request.send();
  }

  render() {
    return (
      <div>
        <h1 onChange={this.makeThatCall()}>Search Word: {this.props.searchy}</h1>
        <h1>Description here</h1>
      </div>
    )
  }
}

export default Description;
