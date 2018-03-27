import React, { Component } from 'react';

import Description from '../components/Description';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchForName: "",
      description: "This"
    }
  }

  setSearchValue = (e) => {

    var request = new XMLHttpRequest();
    //request.addEventListener("load", letUsGetResults);
    request.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + e.target.value + '&format=json&origin=*');
    request.responseType = 'json';

    request.onload = function() {
      this.setState({description: request.response[2]})
      console.log(request.response[2])
    }.bind(this)
    request.send();

    this.setState({SearchForName: e.target.value});
  }

  render () {
    return (
      <div>
        <input type="text" onChange={ this.setSearchValue } value={ this.state.SearchForName } />
        <Description searchy={this.state.SearchForName} descripty={this.state.description}/>
      </div>
    );
 }
}


export default SearchBar;
