import React from 'react'
import Top from '../assets/images/learntop.png'
import Bottom from '../assets/images/learnbottom.png'

export default function SecondSection() {
    return (
        <div className='w-full relative flex flex-col items-center px-6 py-20 justify-center' >
            <p className='text-2xl font-CircularStd-Bold text-white' >Everest’s in-built crypto wallet</p>
            <p className='mt-2 font-CircularStd-Regular text-white lg:w-505px text-center' >Everest’s in-built crypto wallet allows payments occur seamlessly between Drivers and Riders. Pay with EVR and enjoy the discounts, or pay with cash or your card.</p>
            <button style={{color: '#00A0FF'}} className='rounded-xl w-40 font-CircularStd-Regular bg-white mt-10 text-sm h-12' >Learn more</button>
            <img src={Top} alt='topimage' className='absolute top-0 w-56 ml-505px' />
            <img src={Bottom} alt='bottomimage' className='absolute bottom-0 w-350px mr-505px' />
        </div>
    )
}
