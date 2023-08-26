import React, { Component } from 'react'
import Logo from './Logo';


const x = localStorage.getItem("symbol")
export class Basics extends Component {
  constructor(){
    super();
    this.state = {
      article : null
    }
    
  

  }
  async componentDidMount(){
    console.log(x);
    let url =`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${x}&apikey=15NAR54893EYPILM`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState ( {
      article : parsedData
    })

    
    
    
  }
  
  render() {
    
    
    return (
      <div className='my-3'>
        
        <h1 className="text-center">{this.state.article?.Name}</h1>

        <Logo img={x}/>
        
    <div className="main my-5 row ">
        <div className="col-7 o-background-color">
        <div className="container text-center my-3">
            <div className="row">
              <div className="col">
                Market Cap : {this.state.article?.MarketCapitalization}
              </div>
              <div className="col">
                
                Price : {this.state.article?.PERatio * this.state.article?.EPS}
              </div>
              <div className="col">
                {/*52 Week High/Low : {this.state.article?.} / {this.state.article?.EPS}*/}
              </div>
            </div>
          </div>
        <div className="container text-center my-3 ">
            <div className="row">
              <div className="col">
                P/E : {this.state.article?.PERatio}
              </div>
              <div className="col">
                PEG Ratio : {this.state.article?.PEGRatio}
              </div>
              <div className="col">
                EPS : {this.state.article?.EPS}
              </div>
            </div>
          </div>
        <div className="container text-center my-3 ">
            <div className="row">
              <div className="col">
                Book Value : {this.state.article?.BookValue}
              </div>
              <div className="col">
                Dividend Yield : {this.state.article?.DividendYield}
              </div>
              <div className="col">
                ROE : {this.state.article?.ReturnOnEquityTTM}
              </div>
            </div>
          </div>
        </div>
        <div className="col Blank"></div>
        <div className="col-4 o-background-color pt-2">
          <strong>About</strong>
          <hr />
          
          {this.state.article?.Description}
        </div>
    </div>
      </div>
    )
  }
}

export default Basics
