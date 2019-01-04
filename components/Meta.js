import Head from 'next/head'
import React, { Component } from 'react';

export default class Meta extends Component{
  render() {
    return (
      <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{this.props.title ? this.props.title : 'ESL Bot Aggregator'}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <style jsx global>{`
        body { 
          padding: 0px;
          margin: 0px;
          font-family: 'Helvetica';
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </div>
    )
  }
}