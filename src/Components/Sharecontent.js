import React, { Component } from 'react'
import apple from './apple.png'
import Logo from './Logo'

export class Sharecontent extends Component {
    render() {
      let {name,price,changeAmount,changePerc}= this.props
    return (
      <div> 
        <div className="card mb-3 my-5" style = {{maxWidth: "540px"}}>
        <div className="card" style={{width: "18rem"}}>

              
               
                
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    
                      <div className='my-4'>

                    <p className="card-text text-center">Price: {price}</p>
                    <p className="card-text text-center">Day Change: {changeAmount}</p>
                    
                    <p className="card-text text-center">Change Percentage: {changePerc}</p>
                    
                      </div>
                    
                </div>
                
            </div>
            </div>
        
      </div>
    )
  }
}

export default Sharecontent
