import React from 'react'
import FirstSection from '../components/FirstSection'
import Navbar from '../components/Navbar'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import Graph from '../assets/images/Graph.png'
import ForthSection from '../components/ForthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from '../components/SixthSection'
import SeventhSection from '../components/SeventhSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function HomeScreen() {
  return (
    <div className='w-full h-full' >
        <div className='w-full' >
          <Navbar />
        </div>
        <div style={{backgroundColor: '#EEEEEE'}} className='w-full' >  
          <FirstSection />
        </div>
        <div style={{backgroundColor: '#00A0FF'}} className='w-full' >  
          <SecondSection />
        </div>
        <div className='w-full' >  
          <ThirdSection />
        </div>
        <img src={Graph}  alt='graph' />
        <div className='w-full' > 
          <ForthSection />
        </div>
        <div className='w-full' > 
          <FifthSection />
        </div>
        <div className='w-full' > 
          <SixthSection />
        </div>
        <div style={{backgroundColor: '#020405'}} className='w-full ' > 
          <SeventhSection />
        </div>
        <div style={{backgroundColor: '#0B85FD'}} className='w-full ' > 
          <AboutSection />
        </div>
        <div className='w-full ' > 
          <Footer />
        </div>
    </div>
  )
}
