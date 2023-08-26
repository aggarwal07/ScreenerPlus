import React  from 'react'

import {useNavigate} from 'react-router-dom'




export default function Home() {
 
  const navigate = useNavigate();
  
  
  
 const handelSubmit =(e)=>{
    
    e.preventDefault();
      const form = document.getElementById("myForm");
      
      
      localStorage.setItem('symbol', (form.value));
      
      navigate("/Fundamentals")
      
      
      
    }
    

  
    
  return (
    <div className='background-img mt-1 grid'>

    <div className='searchbar'>
      <form className="d-flex for"   onSubmit={handelSubmit}>
        <input id='myForm' className="form-control me-2 py-3 searchbar"  type="text" placeholder="Search For Companies Listed On NYSE,Nasdaq" />
        
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
    </div>
    </div>
  )
}


