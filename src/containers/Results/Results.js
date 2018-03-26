import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
   super(props);
   this.state = {
     info: null
   }
  }

  testXHR = () => {
    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search=butterfly&format=json&origin=*');
    request.responseType = 'json';

    request.onload = function() {
      this.setState({null: request.response.price})
      console.log(request.response.price)
    }.bind(this)
    request.send();
  }

  componentDidMount = () => {
    this.testXHR();
  }

  render() {
    return (
      <div>
       <h1>Hello</h1>
      </div>
    )
  }
}

export default Results;
