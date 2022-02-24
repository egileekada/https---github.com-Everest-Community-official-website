import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import Header from '../assets/images/Header.png'
import Footer from '../components/Footer'

export default function SubscriptionScreen() {
    return (
        <div className='w-full h-full relative' >
            {/* <div className='w-full fixed z-10' >
              <Navbar color='dark' />
            </div>  */}
            <div style={{backgroundImage: "url(" + Header + ")", backgroundPosition:'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover'}} className='relative w-full h-505px lg:h-auto' > 
            {/* <img src={Header} className='object-cover'  alt='' /> */}
                <div className=' w-full flex justify-center px-6 lg:px-14 mt-auto pt-32 ' > 
                    <div className='text-white' >
                        <p className='lg:text-4xl text-3xl font-CircularStd-Medium lg:w-505px ' >Subscribe to Everest rides as an organization</p>
                <p className=' lg:w-505px my-4 text-white font-CircularStd-Regular' >Have a culture by giving staffs and stakeholders of your organization the opportunity to have exquisite experience of excellent ride and logistic services on Everest, and enjoy discounts with the $EVR token.</p>
                    </div>
                    <div className='w-auto bg-white ml-6 hidden lg:flex text-black' > 
                        {/* <div className='bg-blue-300 w-full' /> */}
                        <div className='w-400px py-6 px-6 border-b border-black ' >
                            <p className='font-CircularStd-Medium text-xl' >Signup as a driver below</p>
                            
                            <div className='w-full' > 
                                <div className='flex mt-4' >
                                    <div className='mr-1 ' >
                                        <p className='font-CircularStd-Regular text-sm ' >Business Email</p>
                                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                                    </div>
                                    <div className='ml-1 ' >
                                        <p className='font-CircularStd-Regular text-sm ' >Phone Number</p>
                                        <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                                    </div>
                                </div>
                                <p className='font-CircularStd-Regular text-sm mt-4' >Country</p>
                                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                                <p className='font-CircularStd-Regular text-sm mt-4' >Company Name</p>
                                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                                <p className='font-CircularStd-Regular text-sm mt-4' >Industry</p>
                                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                                <p className='font-CircularStd-Regular text-sm mt-4' >Exoected rides per month</p>
                                <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Less than 100' />
                                <button style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-auto bg-white lg:ml-6 mt-6 lg:hidden text-black' > 
                <div className='bg-blue-300 w-full' />
                <div className=' w-full lg:w-400px py-6 px-6 lg:-mb-20' >
                    <p style={{lineHeight: '55px'}} className='font-CircularStd-Medium text-xl' >Signup as a driver below</p>
                    
                    <div className='w-full' > 
                        <div className='flex flex-col mt-4' >
                            <div className=' ' >
                                <p className='font-CircularStd-Regular text-sm ' >Business Email</p>
                                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                            </div>
                            <div className=' ' >
                                <p className='font-CircularStd-Regular text-sm ' >Phone Number</p>
                                <Input size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                            </div>
                        </div>
                        <p className='font-CircularStd-Regular text-sm mt-4' >Country</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                        <p className='font-CircularStd-Regular text-sm mt-4' >Company Name</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                        <p className='font-CircularStd-Regular text-sm mt-4' >Industry</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='...' />
                        <p className='font-CircularStd-Regular text-sm mt-4' >Exoected rides per month</p>
                        <Select size='lg' fontSize='sm' className='mt-2' backgroundColor='#F4F4F4' placeholder='Less than 100' />
                        <button style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-full text-sm h-12 mt-8' >Next</button>
                    </div> 
                </div>
            </div>
            <div className='w-full ' > 
                <Footer />
            </div>
        </div>
    )
}
