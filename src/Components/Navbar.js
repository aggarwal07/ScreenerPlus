import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/"><h1>Screener+</h1></Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Top Gainers">Top Gainers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Top Losers">Top Losers</Link>
        </li>
        
      
      
      </ul>
      
    </div>
  </div>
</nav>
      
    </div>
  )
}

