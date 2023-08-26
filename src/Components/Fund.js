import React, { Component } from 'react'
import Basics from './Basics'
import Sheet from './Sheet'

export class Fund extends Component {
  render() {
    return (
      <div>
        <Basics/>
        <Sheet/>
      </div>
    )
  }
}

export default Fund

