import React from 'react'
import Car from '../assets/images/klipartz.png'

export default function FirstSection() {
    return (
        <div className=' w-full flex flex-col lg:flex-row px-6 lg:px-14 py-20 relative' >
            <div className='w-full relative z-20' >
                <p className='text-5xl font-CircularStd-Medium text-black lg:w-505px ' >Get a Ride Anytime and Anywhere</p>
                <p className=' lg:w-505px my-4 lg:text-72 font-CircularStd-Regular' >Get the quickest and safest transportation and logistics services with Everest, Anytime and Anywhere Africa’s No.1 Mobility As A Service platform.</p>
                <div className='flex lg:flex-row flex-col' >  
                    <button className='rounded-xl bg-0b lg:w-36 text-white lg:px-0 px-5 text-sm h-12' >Buy $EVR</button>
                    <button style={{backgroundColor: 'rgba(0, 160, 255, 0.08)', color: '#00A0FF'}} className='rounded-xl flex items-center justify-center w-auto px-5 lg:mt-0 mt-4 lg:ml-5 text-sm h-12' >
                        <svg className='mr-2' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4925 0.666664C14.0667 0.666664 15.5 2.15 15.5 4.69166V13.3C15.5 15.8833 14.0667 17.3333 11.4925 17.3333H4.50833C1.975 17.3333 0.5 15.8833 0.5 13.3V4.69166C0.5 2.15 1.975 0.666664 4.50833 0.666664H11.4925ZM4.73333 12.1167C4.48333 12.0917 4.24167 12.2083 4.10833 12.425C3.975 12.6333 3.975 12.9083 4.10833 13.125C4.24167 13.3333 4.48333 13.4583 4.73333 13.425H11.2667C11.5992 13.3917 11.85 13.1075 11.85 12.775C11.85 12.4333 11.5992 12.15 11.2667 12.1167H4.73333ZM11.2667 8.31583H4.73333C4.37417 8.31583 4.08333 8.60833 4.08333 8.96666C4.08333 9.325 4.37417 9.61666 4.73333 9.61666H11.2667C11.625 9.61666 11.9167 9.325 11.9167 8.96666C11.9167 8.60833 11.625 8.31583 11.2667 8.31583ZM7.22417 4.54166H4.73333V4.55C4.37417 4.55 4.08333 4.84166 4.08333 5.2C4.08333 5.55833 4.37417 5.85 4.73333 5.85H7.22417C7.58333 5.85 7.875 5.55833 7.875 5.19083C7.875 4.83333 7.58333 4.54166 7.22417 4.54166Z" fill="#00A0FF"/>
                        </svg>Read white paper
                    </button>
                </div>
                <p className='my-4 text-22 lg:w-350px font-CircularStd-Regular' >Download the Everest App Now and enjoy the signup bonus of x EVR tokens.</p>
                <p className=' text-52 font-CircularStd-Regular' >Available on</p>
                <div className='flex my-4' >  
                    <button style={{border: '1px solid'}} className=' text-00a rounded-xl font-CircularStd-Regular flex items-center justify-center border-border-gradient-color w-36 ml-5 text-sm py-3' >
                        <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.61927 5.72254C1.37787 7.87673 2.16705 11.1459 3.53984 13.1281C4.22508 14.1191 4.91883 15.0087 5.86906 15.0087C5.88697 15.0087 5.90493 15.0083 5.92332 15.0076C6.36976 14.9898 6.6924 14.8523 7.00434 14.7195C7.35454 14.5703 7.71667 14.4159 8.2848 14.4159C8.82527 14.4159 9.17014 14.5653 9.50374 14.7096C9.83247 14.8518 10.1711 14.9989 10.6713 14.9895C11.7417 14.9696 12.3989 14.0097 12.9787 13.1629C13.5837 12.2787 13.8872 11.4203 13.9896 11.0922L13.9937 11.0792C14.0133 11.0209 13.9857 10.9572 13.9298 10.9315C13.9283 10.9309 13.9226 10.9285 13.921 10.9278C13.7325 10.8507 12.0791 10.1173 12.0617 8.11813C12.0456 6.49391 13.3021 5.63381 13.5541 5.47792L13.5659 5.4706C13.5931 5.45303 13.6121 5.42516 13.6186 5.39328C13.6251 5.36146 13.6183 5.32834 13.6 5.30157C12.7327 4.03239 11.4035 3.84111 10.8683 3.8181C10.7907 3.81035 10.7105 3.80645 10.63 3.80645C10.0014 3.80645 9.39927 4.04385 8.91554 4.2346C8.5816 4.36627 8.2932 4.47999 8.09427 4.47999C7.87074 4.47999 7.58067 4.36488 7.24474 4.23161C6.79554 4.05333 6.28642 3.85132 5.74745 3.85132C5.7346 3.85132 5.72193 3.85146 5.70946 3.8517C4.45627 3.87014 3.27211 4.58711 2.61927 5.72254Z" className='fill-current text-22' />
                            <path d="M10.8694 0.324761C10.1106 0.35567 9.20018 0.822816 8.65605 1.46015C8.19365 1.99585 7.74191 2.88902 7.86091 3.78932C7.86838 3.84565 7.91418 3.88912 7.97084 3.8935C8.02211 3.8975 8.07438 3.89952 8.12645 3.89957C8.86851 3.89957 9.66905 3.48904 10.2157 2.82802C10.791 2.13003 11.082 1.23426 10.994 0.431883C10.987 0.369006 10.9317 0.322306 10.8694 0.324761Z" className='fill-current text-22'/>
                        </svg>App store
                    </button>
                    <button className='rounded-xl text-00a border font-CircularStd-Regular flex items-center justify-center border-gradient-to-r from-cyan-500 to-blue-500 w-36 ml-5 text-sm py-3' >
                        <svg className='mr-2' width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.707826 0.861252C0.507784 1.10274 0.406921 1.4112 0.425639 1.72422V15.2758C0.406921 15.5888 0.507784 15.8973 0.707826 16.1388L0.753764 16.1814L8.34658 8.5886V8.41141L0.753764 0.818596L0.707826 0.861252Z" className='fill-current text-22'/>
                        </svg>Play store
                    </button>
                </div>
            </div>
            <div className='w-full' >

            </div>
            <img src={Car} alt='car' className='lg:absolute lg:mt-0 mt-10 right-0 bottom-0' style={{width: '795px'}} /> 
        </div>
    )
}
