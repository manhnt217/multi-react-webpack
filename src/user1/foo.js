import React, { Component } from 'react';

export default class FooComp extends Component {

  constructor(props) {
    super(props)
    this.message = 'Foo component'
  }

  render() {
    return <div>{this.message}</div>;
  }
}
