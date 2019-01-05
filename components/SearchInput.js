import React, { Component } from 'react';

const styles = {
  input: {
    width: '300px',
    backgroundColor: 'white',
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid black',
    marginRight: '10px',
    paddingBottom: '4px',
    fontSize: '16px',
  },
  button: {
    height: '32px',
    border: 'none',
    borderRadius: '2px',
    paddingRight: '24px',
    paddingLeft: '24px',
    fontSize: '16px',
    fontWeight: 'bold',
  }
}
class SearchInput extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          style={styles.input}
          value={this.state.searchQuery}
          onChange={ this.handleSearchChange }
          placeholder="Search by keyword, city, or country"
        />
        <button style={styles.button} onClick={(event) => this.props.onSearch(event, this.state.searchQuery)}>Search</button>
      </form>
    )
  }

}

export default SearchInput