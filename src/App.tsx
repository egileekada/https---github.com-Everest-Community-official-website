import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import DriverScreen from './Screen/DriverScreen';
import HomeScreen from './Screen/HomeScreen';
import RiderScreen from './Screen/RiderScreen';

function App() {
  return ( 
    <Router>  
      <Routes>  
        <Route path='/' element={<HomeScreen />}/> 
        <Route path='/rider' element={<RiderScreen />}/> 
        <Route path='/driver' element={<DriverScreen />}/> 
      </Routes>
    </Router>
  );
}

export default App;
