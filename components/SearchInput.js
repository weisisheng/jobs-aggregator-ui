import React, { Component } from 'react';

class SearchInput extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.searchQuery}
            onChange={ this.handleSearchChange }
            placeholder="Search by keyword, city, or country"
          />
          <style jsx>{`
            input {
              width: 300px;
              outline: none;
              border: none;
              border-bottom: 2px solid black;
              margin-right: 10px;
              padding-bottom: 4px;
              font-size: 16px;
            }
            @media (max-width: 600px) {
              input {
                width: 250px;
                padding: 20px;
                margin: 20px;
              }
            }
          `}</style>
          <button onClick={(event) => this.props.onSearch(event, this.state.searchQuery)}>Search</button>
          <style jsx>{`
            button {
              height: 32px;
              border: none;
              border-radius: 2px;
              padding-right: 24px;
              padding-left: 24px;
              font-size: 16px;
              font-weight: bold;
            }
            @media (max-width: 600px) {
              input {
                width: 250px;
                margin: 20px;
                padding: 0px;
              }
            }
          `}</style>
        </form>
      </div>
    )
  }

}

export default SearchInput