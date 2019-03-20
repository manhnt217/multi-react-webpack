import React, { Component } from 'react';

export default class AwesomeComp extends Component {

  constructor(props) {
    super(props)
    this.message = 'Awesome component 2'
  }

  render() {
    return <div>{this.message}</div>;
  }
}
