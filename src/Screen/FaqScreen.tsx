import React from 'react'
import Footer from '../components/Footer'

export default function FaqScreen() { 

  React.useEffect(() => { 
    localStorage.setItem('index', 'faq')
  }, []) 

    return (
        <div className='w-full h-full pt-20' style={{backgroundColor: "#F4F4F4"}} >
            <div className='w-full h-full flex flex-col items-center justify-center lg:py-20 px-6 py-12 lg:px-20' >
                <p className='font-CircularStd-Bold text-2xl text-center lg:text-3xl' style={{color: '#333333'}} >Frequently Asked Questions</p>
                <div className='mt-12 border-2 border-gray-400 px-4 lg:px-10 rounded-lg py-6' >
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: What is Everest?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Everest is Africa's No 1 blockchain-powered mobility-as-a-service platform</p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: How does Everest operate?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Everest is a blockchain-powered platform with its version 1.0 app that you will be able to
                            download on your phone. It is a one-tap mechanism which enables you to book rides, logistics
                            delivery, including access to an in-app crypto wallet to pay for rides and purchase $EVR or other
                            crypto currencies on the go.
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: What method of Payment does Everest use?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: You can pay for your rides and Everest services using the Everest token, $EVR.You can also
                            pay with cash, bank transfers, and USSD
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: What is $EVR?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: The $EVR is Everest utility token, that is, Everest’s digital currency. It can be used to pay for
                            rides and logistics services on Everest. It can also be staked, traded and exchanged. With the
                            $EVR token anyone can participate in the key decisions made in Everest.
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: After booking an Everest ride, how long do I need to wait before my ride shows up?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Everest doesn't take commissions from its drivers. This means the driver takes all he earns
                            home. This makes Everest the most preferred choice for drivers. So you don't have to wait too
                            long before your Everest ride shows up.
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: Can I carpool with Everest?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Absolutely!</p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: What do I stand to benefit by booking a ride with Everest?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Asides real time rides which come through for you, Everest rides help you save money,
                            because,with the $EVR, your rides become cheaper and cheaper, as the $EVR increases in value
                        </p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >Everest also helps you generate actual money, with the geomining feature, that allows you to
                            mine $EVR as you move. You can exchange $EVR for other crypto currencies or fiat.
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: How does Everest achieve driver satisfaction?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: At Everest compensation is instant, there are zero commissions on drivers' earnings, plus,
                            Everest has several check-in centers for her drivers to service their cars at minimal charges.
                            Everest also organizes driver trainings and certification for her drivers.
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: Can I use the Everest token outside Everest rides?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Definitely. The Everest token is like any other digital currency. It can be staked, traded and
                            exchanged for other cryptocurrencies or to fiat and used to make purchases.
                            However, it is advised to hold the tokens as they are sure to increase in value
                        </p>
                    </div> 
                    <div className='my-6' > 
                        <p className='font-CircularStd-Medium text-xl' style={{color: '#333333'}} >Q: Am I assured of safety on Everest?</p>
                        <p style={{color: '#727272'}} className='font-CircularStd-Regular mt-1' >A: Personal information, location and token mined are safe, secure and confidential. What's safer,
                            more transparent and better at tracking, than blockchain technology? Nothing else yet.
                        </p>
                    </div> 
                </div> 
<<<<<<< HEAD
                <button style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl px-12 mt-16 text-sm h-12' >Sign up as a driver with Everest</button>
=======
                <button style={{backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl px-12 mt-16 text-sm h-12' >Sign up with Everest</button>
>>>>>>> ec5978f820e731f6c3007fc8a33e62a0c7c342aa
            </div>
            <div className='w-full bg-white ' > 
                <Footer />
            </div>
        </div>
    )
}
