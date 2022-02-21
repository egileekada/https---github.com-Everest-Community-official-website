import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../assets/images/Header.png'
import Phone from '../assets/images/phone.png'
import Footer from '../components/Footer'

export default function RiderScreen() {
    return (
        <div className='w-full h-full relative' >
            <div style={{backgroundImage: "url(" + Header + ")", backgroundPosition:'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover'}} className='relative w-full' > 
                {/* <img src={Header} className='object-cover'  alt='' /> */}
                <div className=' bottom-0 w-full flex lg:flex-row flex-col justify-center items-center py-12 pt-32 px-14 ' > 
                    <div className='text-white' >
                        <p style={{lineHeight: '55px'}} className='lg:text-5xl text-3xl font-CircularStd-Medium lg:w-505px ' >Get anywhere you want to get with convenience</p>
                        <p className=' lg:w-505px my-4 font-CircularStd-Regular' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh libero elit faucibus egestas interdum. !</p> 
                        <p className='my-4 lg:w-350px font-CircularStd-Regular' >Download the Everest App Now and enjoy the signup bonus of x EVR tokens.</p>
                        <p className='font-CircularStd-Regular' >Available on</p>
                        <div className='flex my-4' >  
                            <button style={{ border: '1px solid'}} className='rounded-xl flex items-center justify-center border-gradient-color w-36 text-sm py-3' >
                                <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.61927 5.72254C1.37787 7.87673 2.16705 11.1459 3.53984 13.1281C4.22508 14.1191 4.91883 15.0087 5.86906 15.0087C5.88697 15.0087 5.90493 15.0083 5.92332 15.0076C6.36976 14.9898 6.6924 14.8523 7.00434 14.7195C7.35454 14.5703 7.71667 14.4159 8.2848 14.4159C8.82527 14.4159 9.17014 14.5653 9.50374 14.7096C9.83247 14.8518 10.1711 14.9989 10.6713 14.9895C11.7417 14.9696 12.3989 14.0097 12.9787 13.1629C13.5837 12.2787 13.8872 11.4203 13.9896 11.0922L13.9937 11.0792C14.0133 11.0209 13.9857 10.9572 13.9298 10.9315C13.9283 10.9309 13.9226 10.9285 13.921 10.9278C13.7325 10.8507 12.0791 10.1173 12.0617 8.11813C12.0456 6.49391 13.3021 5.63381 13.5541 5.47792L13.5659 5.4706C13.5931 5.45303 13.6121 5.42516 13.6186 5.39328C13.6251 5.36146 13.6183 5.32834 13.6 5.30157C12.7327 4.03239 11.4035 3.84111 10.8683 3.8181C10.7907 3.81035 10.7105 3.80645 10.63 3.80645C10.0014 3.80645 9.39927 4.04385 8.91554 4.2346C8.5816 4.36627 8.2932 4.47999 8.09427 4.47999C7.87074 4.47999 7.58067 4.36488 7.24474 4.23161C6.79554 4.05333 6.28642 3.85132 5.74745 3.85132C5.7346 3.85132 5.72193 3.85146 5.70946 3.8517C4.45627 3.87014 3.27211 4.58711 2.61927 5.72254Z" fill="#FFF"/>
                                    <path d="M10.8694 0.324761C10.1106 0.35567 9.20018 0.822816 8.65605 1.46015C8.19365 1.99585 7.74191 2.88902 7.86091 3.78932C7.86838 3.84565 7.91418 3.88912 7.97084 3.8935C8.02211 3.8975 8.07438 3.89952 8.12645 3.89957C8.86851 3.89957 9.66905 3.48904 10.2157 2.82802C10.791 2.13003 11.082 1.23426 10.994 0.431883C10.987 0.369006 10.9317 0.322306 10.8694 0.324761Z" fill="#FFF"/>
                                </svg>App store
                            </button>
                            <button style={{ border: '1px solid'}} className='rounded-xl flex items-center justify-center border-gradient-color w-36 ml-5 text-sm py-3' >
                                <svg className='mr-2' width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.707826 0.861252C0.507784 1.10274 0.406921 1.4112 0.425639 1.72422V15.2758C0.406921 15.5888 0.507784 15.8973 0.707826 16.1388L0.753764 16.1814L8.34658 8.5886V8.41141L0.753764 0.818596L0.707826 0.861252Z" fill="#FFF"/>
                                </svg>Play store
                            </button>
                        </div>
                    </div>
                    <img src={Phone} alt='phone' style={{height: '540px'}} className='lg:ml-20 lg:mt-0 mt-6' />
                </div>
            </div>
            <div className='w-full ' > 
                <Footer />
            </div>
        </div>
    )
}
