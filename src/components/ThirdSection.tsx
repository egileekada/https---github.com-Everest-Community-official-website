import React from 'react'
import Xchange from '../assets/images/moneyexchange.png'
import Driver from '../assets/images/drive.png'
import Like from '../assets/images/like.png'
import Percent from '../assets/images/percentage.png'

export default function ThirdSection() {
    return (
        <div className='py-20 px-6 w-full flex justify-center items-center' >
            <div className='grid grid-cols-1 w-auto gap-4 lg:gap-12 lg:grid-cols-2' >
                <div className='w-64 lg:mx-8 flex flex-col items-center' >
                    <img src={Xchange}  alt='xchange' />
                    <p className=' font-CircularStd-Medium text-center mt-2' >Easily swap your EVR for Cash with a few clicks</p>
                </div>
                <div className='w-64 lg:mx-8  flex flex-col items-center' >
                    <img src={Driver} alt='drive' />
                    <p className=' font-CircularStd-Medium text-center mt-2' >Everest connects you with a Driver in minutes</p>
                </div>
                <div className='w-64 lg:mx-8  flex flex-col items-center' >
                    <img src={Like} alt='like' />
                    <p className=' font-CircularStd-Medium text-center mt-2' >Everest is Easy to use and requires no Technical expertise</p>
                </div>
                <div className='w-64 lg:mx-8  flex flex-col items-center' >
                    <img src={Percent} alt='percent' />
                    <p className=' font-CircularStd-Medium text-center mt-2' >Cheapest fares for Riders and No commission rates for Drivers</p>
                </div>
            </div>
        </div>
    )
}
