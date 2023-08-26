import React, { Component } from 'react'
import Sharecontent from './Sharecontent';

export class Share extends Component {
  
    constructor(){
        super();
        this.state = {
          gainer: this.gainer,
          
          
        }
    }
    async componentDidMount(){
        let url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=15NAR54893EYPILM";
        let data = await fetch(url);
        let parseData=  await data.json();
        //console.log(parsedData.top_losers)
        if (this.props.g==="Gainers"){
          
          this.setState ({
            gainer: parseData.top_gainers,
            
          })
         
        }
        else{
          this.setState ({
            
            gainer : parseData.top_losers
          })
        }
        
      }
      render() {
        
        
        
    return (
      <div >
        <h1 className='text-center my-2'>Top {this.props.g}</h1>
        <div className='row'>

         {
         this.state.gainer?.map((element) => {
           return (
             
             <div className="col-md-4 my-3" key={element.ticker}> 

                <Sharecontent name={element.ticker} price={element.price} changeAmount={element.change_amount} changePerc={element.change_percentage}/>
                </div>
                  
                  );
                })}
          
                </div>
      </div>
    )
  }
}

export default Share
