import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchInput extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return (
      <TextField
        style={{'width':'500px'}}
        value={this.state.searchQuery}
        onChange={ this.handleSearchChange }
        label="Search by keyword or location"
    />
    )
  }

}

export default SearchInput