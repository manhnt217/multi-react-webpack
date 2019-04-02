import React, { Component } from 'react';
import { getMagicNumber } from '@manhnt217/magic-number'

export default class AwesomeComp extends Component {

  constructor(props) {
    super(props)
    this.message = 'A magic number: ' + getMagicNumber()
  }

  render() {
    return <div>{this.message}</div>;
  }
}
