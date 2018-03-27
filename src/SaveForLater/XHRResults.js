import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
   super(props);
   this.state = {
     word: null,
     description: null
   }
  }

  testXHR = () => {
    var thing = "Van Buren";

    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', `https://en.wikipedia.org/w/api.php?action=opensearch&search=${thing}&format=json&origin=*`);
    request.responseType = 'json';

    request.onload = function() {
      this.setState({word: request.response[1][0], description: request.response[2]})
      console.log(request.response)
    }.bind(this)
    request.send();
  }

  componentDidMount = () => {
    this.testXHR();
  }

  render() {
    return (
      <div>
       <h1>{this.state.word}</h1>
       <h1>{this.state.description}</h1>
      </div>
    )
  }
}

export default Results;
