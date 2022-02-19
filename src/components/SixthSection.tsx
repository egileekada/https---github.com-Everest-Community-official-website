import { color } from '@chakra-ui/styled-system'
import React from 'react'

export default function SixthSection() {
    return (
        <div className='w-full flex lg:flex-row flex-col justify-center px-6 py-20 lg:px-14 items-center'>
            <div style={{border: '1px solid #00A0FF', borderRadius: '8px'}} className='w-full h-36 flex flex-col justify-center px-10 mx-1' >
                <p style={{color: '#080E12'}} className=' font-CircularStd-Medium text-xl' >Vision</p>
                <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >To be the preferred mobility-as-a-service platform worldwide</p>
            </div>
            <div style={{border: '1px solid #00A0FF', borderRadius: '8px'}} className='w-full h-36 lg:mt-0 mt-10 flex flex-col justify-center px-10 mx-1' >
                <p style={{color: '#080E12'}} className=' font-CircularStd-Medium text-xl' >Mission</p>
                <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >To advance the development of the public and private transportation ecosystem in Africa and beyond.</p>
            </div>
        </div>
    )
}
