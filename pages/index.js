import Meta from '../components/Meta';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import JobList from '../components/JobList';
import SearchInput from '../components/SearchInput';

class Index extends Component {
  state = {
    data: this.props.data,
  }

  onSearch = (event, query) => {
    event.preventDefault();
    fetch('https://api.eslbot.com/search?param=' + query, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({ data: json })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Meta />
        <Layout>
        <div style={{'textAlign':'center'}}>
          <SearchInput 
            style={{'textAlign':'center'}}
            onSearch={this.onSearch}
            />
          <p>We found {this.state.data.length} jobs</p>
        </div>
        <JobList data={this.state.data} />
        </Layout>
      </div>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('http://144.202.96.77:3000/api/jobs')
  const data = await res.json()
  return {
    data: data.reverse()
  }
}

export default Index;