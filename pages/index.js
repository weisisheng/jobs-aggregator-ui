import Meta from '../components/Meta';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import JobList from '../components/JobList';
import SearchInput from '../components/SearchInput';

class Index extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Layout>
        <div style={{'textAlign':'center'}}>
          <SearchInput style={{'textAlign':'center'}}/>
          <p>We found {this.props.data.length} jobs</p>
        </div>
        <JobList data={this.props.data} />
        </Layout>
      </div>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/jobs')
  const data = await res.json()
  return {
    data: data
  }
}

export default Index;