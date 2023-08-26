
import './App.css';



import Fund from './Components/Fund';
import Home from './Components/Home';
import Logo from './Components/Logo';
import Navbar from './Components/Navbar';
import Share from './Components/Share';

import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>

          <Navbar/>
          <Logo/>
          
          
          
          <Routes>
          

            <Route exact path="/Fundamentals" element= {<Fund key = "Fundamentals"/>}> </Route>
            <Route exact path="/" element= {<Home key="home"/>}> </Route>
            <Route exact path="/Top Gainers" element= {<Share key ="Top Gainers" g="Gainers"/>}> </Route>
            <Route exact path="/Top Losers" element= {<Share key="Top Losers" g="Losers"/>}> </Route>
     
          </Routes>
      </Router>
    </div>
  );
}

export default App;
