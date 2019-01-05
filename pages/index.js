import Meta from '../components/Meta';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import JobList from '../components/JobList';
import SearchInput from '../components/SearchInput';
import CircularProgress from '@material-ui/core/CircularProgress';

class Index extends Component {
  state = {
    data: this.props.data,
    loading: false,
  }

  onSearch = (event, query) => {
    this.setState({ loading: true })
    event.preventDefault();
    if (query !== '') {
      fetch('https://api.eslbot.com/search?param=' + query, {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.sort((a,b) => (a.dateAdded < b.dateAdded) ? 1 : ((b.dateAdded < a.dateAdded) ? -1 : 0)); 
        this.setState({ data: json, loading: false })
      })
      .catch(error => console.log(error))
    } else {
      fetch('http://144.202.96.77:3000/api/jobs', {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.sort((a,b) => (a.dateAdded < b.dateAdded) ? 1 : ((b.dateAdded < a.dateAdded) ? -1 : 0)); 
        this.setState({ data: json, loading: false })
      })
      .catch(error => console.log(error))
    }
  }

  render() {
    const loading = (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
      </div>
    )
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
        { this.state.loading ? loading : <JobList data={this.state.data} /> }
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