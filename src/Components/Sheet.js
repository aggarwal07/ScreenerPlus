import React, { Component } from 'react'
import Sheetcontent from './Sheetcontent'

export class Sheet extends Component {

    constructor(){
        super();
        this.state = {
          article : null
        }
        
      
    
      }
      async componentDidMount(){
        
        const x = localStorage.getItem("symbol")
        
        let url =`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${x}&apikey=15NAR54893EYPILM`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ( {
          article : parsedData.quarterlyReports
        })
        
        
        
        
      }





  render() {
    
    return (
      <div>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
            <Sheetcontent date = "Fiscal End Date" gproft = "Gross Profit" revenue = "Total Revenue" opincome = "Operating Income" inbt = "Income Before Tax" ebitda = "EBITDA" neti ="Net Income"/>

            </tr>
          </thead>
          
          <tbody>
            {
              this.state.article?.slice(0,13).map((element) => {
                return (
                  
                <tr>
                  <Sheetcontent date = {element.fiscalDateEnding} gproft = {element.grossProfit} revenue = {element.totalRevenue} opincome = {element.operatingIncome} inbt = {element.incomeBeforeTax} ebitda = {element.ebitda} neti = {element.netIncome}/>
                  
                </tr>
                  );
                })}
              
              
         
          </tbody>
        </table>
      </div>
    )
  }
}

export default Sheet
