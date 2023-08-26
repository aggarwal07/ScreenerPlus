import React, { Component } from 'react'

export class Logo extends Component {
  constructor(){
    super();
    this.state = {
      link : this.link
    }
    
  

  }


  async componentDidMount(){
    
    let url = `https://api.api-ninjas.com/v1/logo?ticker=${this.props.img}`
    let data = await fetch(url,{
      headers:{
        'X-Api-Key': 'vRfLDhWiRYYV+n6KUMZzbw==BbNCKSRldUmh4voy'
      }
    })
    let parsedData = await data.json();
    
    this.setState({
      link : parsedData[0]?.image
    })
    
  }

  render() {
    return(
      <div>
      
    <img className=""src= {this.state.link} alt="" />
    
    
    
    </div>
  
  
  ) 
  }
}

export default Logo
