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
      <div style={{'marginTop':'50px'}}>
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
              border-bottom: 2px solid #AAAAAA;
              margin-right: 10px;
              padding-bottom: 4px;
              font-size: 16px;
              transition: border-bottom .25s;
            }
            input:hover {
              border-bottom: 2px solid #111111;
              transition: border-bottom .25s;
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
              background-color: #0074D9;
              color: #DDDDDD;
              transition: color .25s;
            }
            button:hover {
              color: white;
              transition: color .25s;
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