'use client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/page';
import { BestAirMax } from './components/bestAirMax';
import Feature from './components/feature';
import GearUp from './components/gearUp';

import FlightEssentials from "./components/dontMiss"
import Essentials from './components/essential';
import New from './components/new';
import ShopMen1 from './components/new';  
import ShopMen2 from './components/new';  
import ProductPageWomen1 from './components/new';  
import ProductPageWomen2 from './components/new';  

import HelpPage from './help/page';
 import JoinUs from './joinUs/page';

import Login from './login/page';

function App() {
  return (
   
    <Router>
      <Home />
      <BestAirMax />
      <Feature />
       <GearUp />
       <FlightEssentials />
       <Essentials />
       <New />
       
       
      <Routes>
    
        
        <Route path="/New-men-shop" element={<ShopMen1 />} />
        <Route path="./new/page" element={<ShopMen2 />} />
        <Route path="./New" element={<ProductPageWomen1 />} />
        <Route path="./New" element={<ProductPageWomen2 />} />     
      
        <Route path="/help" element={<HelpPage />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/login/" element={<Login/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
