import React, { Component } from 'react'
import FooComp from './foo'
import { getMagicNumber } from '@manhnt217/magic-number'

export default class AwesomeComp extends Component {

  constructor(props) {
    super(props)
    this.message = 'User 1 wants to give you a magic number: ' + getMagicNumber()
  }

  render() {
    return <div>
      <div>{this.message}</div>
      <FooComp></FooComp>
    </div>

  }
}
