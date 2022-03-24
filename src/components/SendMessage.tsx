import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

export default function SendMessage() {
    return (
        <div className='w-full py-12  lg:px-0 px-6 bg-[#F9FCFF] flex flex-col lg:justify-center lg:items-center' >
            <p className=' font-CircularStd-Bold text-3xl text-[#333333]' >Send us a message</p> 
            <div className='lg:w-600px' >
                <div className='w-auto flex lg:flex-row flex-col items-center mt-12' > 
                    <div className='w-full' >
                        <p className='text-sm font-CircularStd-Regular mb-1 text-[#222]' >Full name</p>
                        <Input  size='lg' fontSize='sm' backgroundColor='#F4F4F4' placeholder=''  /> 
                    </div>
                    <div className='w-full mt-4 lg:mt-0 lg:mx-5' >
                        <p className='text-sm font-CircularStd-Regular mb-1 text-[#222]' >Phone</p>
                        <Input  size='lg' fontSize='sm' backgroundColor='#F4F4F4' placeholder=''  /> 
                    </div>
                    <div className='w-full mt-4 lg:mt-0 ' >
                        <p className='text-sm font-CircularStd-Regular mb-1 text-[#222]' >Email Address</p>
                        <Input size='lg' fontSize='sm' backgroundColor='#F4F4F4' placeholder=''  /> 
                    </div> 
                </div> 
                <p className='text-sm font-CircularStd-Regular mb-1 text-[#222] mt-4' >Message</p>
                <Textarea size='lg' fontSize='sm' backgroundColor='#F4F4F4' placeholder=''  /> 
                <div className='w-full flex' >
                <button className='lg:w-350px w-full py-3 font-CircularStd-Medium bg-[#0B85FD] rounded-md ml-auto mt-8 text-white' >Send message</button>
                </div>
            </div> 
        </div>
    )
}
