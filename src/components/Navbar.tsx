import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

export default function (props: any) {

  const [tab, setTab] = React.useState('rider')
  const navigate = useNavigate()

  const ClickHandler =(item: any)=>{ 
    setTab(item)
  }

  return (
    <div style={props.color === 'dark' ? {backgroundColor: 'rgba(2, 4, 5, 0.7)', height: '80px'} : {backgroundColor: '#FFFFFF', height: '80px'}} className='w-full flex items-center px-12' >
      <div className='flex item-center' >
        <img src={Logo} alt='logo' className=' h-8' />
        <p className={props.color === 'dark' ? 'ml-4 font-CircularStd-Regular text-3xl text-white' : 'ml-4 font-CircularStd-Regular text-3xl'} >Everest</p>
      </div>
      <div className='mx-auto flex item-center mt-2' >
        <Link to='/rider' ><p onClick={()=> ClickHandler('rider')} style={props.color === 'dark' ? {color: '#FFFFFF'}: {color: '#727272'}} className={tab === 'rider' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Rider</p></Link> 
        <Link to='/driver' ><p onClick={()=> ClickHandler('driver')} style={props.color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'driver' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Driver</p></Link>
        <Link to='/faq' ><p onClick={()=> ClickHandler('faq')} style={props.color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'faq' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >FAQ</p></Link>
        <Link to='/subscription' ><p onClick={()=> ClickHandler('subscription')} style={props.color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'subscription' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Subscription</p></Link>
        <Link to='/rider' ><p onClick={()=> ClickHandler('rider')} style={props.color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === '' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >White paper</p></Link>
      </div>
      <button style={props.color === 'dark' ? {backgroundColor: '#FFF', color: '#222222'} : {backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-36 text-sm h-12' >Buy $EVR</button>
    </div>
  )
}
