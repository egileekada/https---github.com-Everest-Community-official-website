import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../assets/images/Header.png'
import Footer from '../components/Footer'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Drawer, DrawerContent, Menu, useDisclosure } from '@chakra-ui/react'

export default function DriverScreen() {

    const [tab, setTab] = React.useState(1)

    const FirstStage =()=> {
        return(
            <div className='w-full' > 
                <p className='font-CircularStd-Regular text-sm mt-4' >Email Address</p>
                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='yourmail@hotmail.com' />
                <p className='font-CircularStd-Regular text-sm mt-4' >Phone</p>
                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' />
                <p className='font-CircularStd-Regular text-sm mt-4' >City</p>
                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Location' />
                <button onClick={()=> setTab(2)} style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
            </div>
        )
    }

    const SecondStage =()=> {
        return(
            <div className='w-full' > 
                <div className='flex mt-4' >
                    <div className='mr-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >First Name</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Your Frist Name' />
                    </div>
                    <div className='ml-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >Last Name</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Your Last Name' />
                    </div>
                </div>
                <div className='flex mt-4' >
                    <div className='mr-1 w-full ' >
                        <p className='font-CircularStd-Regular text-sm ' >Language</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='English' />
                    </div>
                    <div className='ml-1 w-full ' >
                        <p className='font-CircularStd-Regular text-sm ' >I have a car</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Select' />
                    </div>
                </div>
                <div className='flex mt-4' >
                    <div className='mr-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >Vehicle Manufacturer</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='81234567890' />
                    </div>
                    <div className='ml-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >Vehicle Model</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='81234567890' />
                    </div>
                </div>
                <button onClick={()=> setTab(3)} style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
            </div>
        )
    }

    const ThirdStage =()=> {
        return(
            <div className='w-full' > 
                <p className='font-CircularStd-Regular text-sm mt-4' >Driver Licence Number</p>
                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' />
                <p className='font-CircularStd-Regular text-sm mt-4' >Driver Licence Number</p>
                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' />
                <div className='flex mt-4' >
                    <div className='mr-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >Picture of Driver Licence</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Your Frist Name' />
                    </div>
                    <div className='ml-1 ' >
                        <p className='font-CircularStd-Regular text-sm ' >Driver Profile photo</p>
                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Your Last Name' />
                    </div>
                </div>
                <button onClick={()=> setTab(4)} style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
            </div>
        )
    }

    const ForthStage =()=> {
        return(
            <div className='w-full' > 
                <p className='font-CircularStd-Regular text-sm mt-4' >Bank Name</p>
                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                <p className='font-CircularStd-Regular text-sm mt-4' >Account Name</p>
                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                <p className='font-CircularStd-Regular text-sm mt-4' >Account Number</p>
                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                <button onClick={()=> setTab(1)} style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
            </div>
        )
    }

    return (
        <div className='w-full h-full relative' >
            {/* <div className='w-full fixed z-10' >
              <Navbar color='dark' />
            </div>  */}
            <div className='relative w-full' > 
                <img src={Header} className=''  alt='' />
                <div className='absolute bottom-0 w-full flex justify-center px-14 ' > 
                    <div className='text-white' >
                        <p className='text-5xl font-CircularStd-Medium lg:w-505px ' >Sign up as a Driver for Everest and earn bigs</p>
                        <p className=' lg:w-505px my-4 font-CircularStd-Regular' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh libero elit faucibus egestas interdum. !</p> 
                        
                    </div>
                    <div className='w-auto bg-white ml-6 text-black' > 
                    <div className='bg-blue-300' style={tab === 1 ? {width: '25%', height: '6px'}: tab === 2 ? {width: '50%', height: '6px'}: tab === 3 ? {width: '75%', height: '6px'}: tab === 4 ? {width: '100%', height: '6px'}: {}} />
                        <div className='w-400px py-6 px-6' >
                            <p className='font-CircularStd-Medium text-xl' >Signup as a driver below</p>
                            {tab === 1 ? 
                                <FirstStage/>
                                :tab === 2 ? 
                                    <SecondStage/>
                                    :tab === 3 ? 
                                        <ThirdStage/>
                                        :tab === 4 ? 
                                            <ForthStage/>
                            :null}
                            <p className='font-CircularStd-Regular text-sm mt-6' >By signing up, you accept our <span style={{color: '#85C1FB'}} >Terms of Service</span> and <span style={{color: '#85C1FB'}} >Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full ' > 
                <Footer />
            </div>
        </div>
    )
}
