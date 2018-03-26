import React, { Component } from 'react';

import Description from '../components/Description';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchForName: null
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
        <Description />
      </div>
    );
 }
}


export default SearchBar;
