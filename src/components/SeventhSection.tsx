import React from 'react'
import Algo from '../assets/images/algorandalgo.png'
import Gecko from '../assets/images/coingecko.png'
import Market from '../assets/images/coinmarketcap.png'
import Telegraph from '../assets/images/coin-telegraph.png'
import Pay from '../assets/images/pay.png'

export default function SeventhSection() {
    return (
        <div className='w-full px-6 py-20 flex flex-col justify-center items-center' >
            <div className='flex items-center' >
                <div className='flex items-center mx-4' >
                    <img src={Algo} alt='Algo' />
                    <p className='font-CircularStd-Regular text-white ml-2 text-xl' >Algorand</p>
                </div>
                <div className='flex items-center mx-4' >
                    <img src={Gecko} alt='gecko' /> 
                </div>
                <div className='flex items-center mx-4' >
                    <img src={Market} alt='Market' /> 
                </div>
            </div>
            <div className='flex items-center mt-8' >
                <div className='flex items-center mx-4' >
                    <img src={Telegraph} alt='Telegraph' /> 
                </div>
                <div className='flex items-center mx-4' >
                    <img src={Pay} alt='Pay' /> 
                </div> 
            </div>
        </div>
    )
}
