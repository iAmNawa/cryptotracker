import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';

class Results extends Component {
  constructor(props) {
   super(props);
   this.state = {
     word: null,
     description: null,
     name: 'startname',
     testThingy: 'string'
   }
  }

  testXHR = () => {
    var thing = "dylan";

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
        <SearchBar />
      </div>
    )
  }
}

export default Results;
