import React from 'react'
import Algo from '../assets/images/algorandalgo.png'
import Gecko from '../assets/images/Smart.png'
import Market from '../assets/images/coinmarketcap.png'
import Transcend from '../assets/images/Transcend.png'
import Pay from '../assets/images/pay.png'
// import Reddit from '../assets/images/Reddit-logo.jpg'

export default function SeventhSection() {
    return (
        <div className='w-full px-10 py-20 flex flex-col lg:flex-row justify-center items-center' >
            <div className='flex lg:flex-row flex-col items-center' >
                <div className=' lg:w-auto w-full flex items-center' >
                    <div className='flex lg:hidden lg:w-auto p-4 lg:p-0 lg:hidden items-center lg:border-0 border border-[#171717] lg:mx-4 my-2 lg:my-6 mr-4 lg:mr-0' >
                        <img src={Pay} alt='Pay' /> 
                    </div> 
                    <div className='lg:flex hidden lg:w-auto p-4 lg:p-0 items-center lg:border-0 border border-[#171717]  lg:mx-4 my-2 lg:my-6 ml-4 lg:ml-0' >
                        <img src={Algo} alt='Algo' />
                        <p className='font-CircularStd-Regular text-white ml-2 text-xl' >Algorand</p>
                    </div>
                    <div className='flex lg:w-auto p-4 lg:p-0 items-center lg:border-0 border border-[#171717]  lg:mx-4 my-2 lg:my-6' >
                        <img src={Gecko} alt='gecko' /> 
                    </div>
                </div>
                <div className='flex lg:hidden lg:w-auto w-full p-4 lg:p-0  items-center lg:border-0 border border-[#171717]  lg:mx-4 my-2 lg:my-6' >
                    <img src={Algo} alt='Algo' className='ml-auto lg:ml-0' />
                        <p className='font-CircularStd-Regular mr-auto lg:mr-0 text-white ml-2 text-xl' >Algorand</p>
                    </div>
                <div className='flex items-center lg:w-auto w-full p-4 lg:p-0 lg:border-0 border border-[#171717] lg:mx-4 my-2 lg:my-6' >
                    <img src={Market} alt='Market' className='mx-auto lg:mx-0' /> 
                </div>
            </div>
            <div className='w-full lg:w-auto flex lg:flex-row flex-col items-center  ' >
                <div className='flex items-center lg:w-auto w-full p-1 lg:p-0 lg:border-0 border border-[#171717] lg:mx-4 my-2 lg:my-6' >
                    <img src={Transcend} alt='Telegraph' className='mx-auto lg:mx-0' /> 
                </div>
                <div className='lg:flex hidden items-center  lg:mx-4 my-2 lg:my-6' >
                    <img src={Pay} alt='Pay' /> 
                </div> 
                {/* <div className='flex items-center lg:mx-4 my-6' >
                    <img src={Reddit} className='w-48 px-4 bg-white' alt='Telegraph' /> 
                </div> */}
            </div>
        </div>
    )
}
