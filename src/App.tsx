import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerContent } from '@chakra-ui/react';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';   
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import DriverScreen from './Screen/DriverScreen';
import FaqScreen from './Screen/FaqScreen';
import HomeScreen from './Screen/HomeScreen';
import RiderScreen from './Screen/RiderScreen';
import SubscriptionScreen from './Screen/SubscriptionScreen';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  function ScrollToTop() { 

    const location = useLocation()
    React.useEffect(() => {
      
      window.scrollTo(0, 0);
    }, [location])
  
    return null
  } 

  return ( 
    <Router>  
      <div className='w-full fixed top-0 z-50' style={{height: '80px'}} >
        <Navbar open={onOpen}  />
      </div>
      <div className=' lg:hidden flex' >
          <Drawer 
              size='xs'
              isOpen={isOpen}
              placement="left"
              onClose={onClose}  > 
              <DrawerContent>
                <SideBar close={onClose} />
                  {/* <DrawerCloseButton  /> */}
                  {/* <Menu index={tab} close={onClose} mobile={true} tab={setTab} /> */}
              </DrawerContent>
          </Drawer>
      </div>
      <ScrollToTop />
      <Routes>  
        <Route path='/' element={<HomeScreen />}/> 
        <Route path='/rider' element={<RiderScreen />}/> 
        <Route path='/driver' element={<DriverScreen />}/> 
        <Route path='/faq' element={<FaqScreen />}/> 
        <Route path='/subscription' element={<SubscriptionScreen />}/> 
      </Routes>
    </Router>
  );
}

export default App;
