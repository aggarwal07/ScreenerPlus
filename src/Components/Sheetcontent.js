import React, { Component } from 'react'

export class Sheetcontent extends Component {
  render() {
    return (
      <>
      <th>{this.props.date}</th>
      <th>{this.props.gproft}</th>
      <th>{this.props.revenue}</th>
      <th>{this.props.opincome}</th>
      <th>{this.props.inbt}</th>
      <th>{this.props.ebitda}</th>
      <th>{this.props.neti}</th>
     
      
      
      
     
      </>
    )
  }
}

export default Sheetcontent
