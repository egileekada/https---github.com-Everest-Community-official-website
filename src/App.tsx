import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerContent } from '@chakra-ui/react';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';   
import Navbar from './components/Navbar';
import DriverScreen from './Screen/DriverScreen';
import HomeScreen from './Screen/HomeScreen';
import RiderScreen from './Screen/RiderScreen';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return ( 
    <Router>  
      <div className='w-full' >
        <Navbar />
      </div>
      <div className=' lg:hidden flex' >
          <Drawer 
              size='xs'
              isOpen={isOpen}
              placement="left"
              onClose={onClose}  > 
              <DrawerContent>
                  {/* <DrawerCloseButton  /> */}
                  {/* <Menu index={tab} close={onClose} mobile={true} tab={setTab} /> */}
              </DrawerContent>
          </Drawer>
      </div>
      <Routes>  
        <Route path='/' element={<HomeScreen />}/> 
        <Route path='/rider' element={<RiderScreen />}/> 
        <Route path='/driver' element={<DriverScreen />}/> 
      </Routes>
    </Router>
  );
}

export default App;
