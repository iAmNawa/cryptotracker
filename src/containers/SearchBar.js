import React, { Component } from 'react';

import DisplayIt from '../components/DisplayIt';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchForName: 0
    }
  }

  setSearchValue = (e) => {
    this.setState({SearchForName: e.target.value});
  }

  render () {
    return (
      <div>
        <input type="text" onChange={ this.setSearchValue } value={ this.state.SearchForName } />
        <h1>{this.state.SearchForName}</h1>
        <DisplayIt />
      </div>
    );
 }
}


export default SearchBar;
