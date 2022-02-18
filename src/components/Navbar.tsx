import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default function (props: any) {

  const [tab, setTab] = React.useState('')
  const [color, setColor] = React.useState('')
  const navigate = useNavigate();

  React.useEffect(() => { 
    if(tab !== ''){
      localStorage.setItem('color', 'dark')
      setColor('dark')
    }else{ 
      localStorage.setItem('color', '')
      setColor('')
    } 

    if(tab === ''){ 
        navigate('/'+tab) 
    } else if(tab === 'rider'){
        navigate('/'+tab)
    } else if(tab === 'driver'){  
        navigate('/'+tab)
    } 
  }, [tab, color])


  React.useEffect(() => {
    if(localStorage.getItem('tab')){ 
      setTab(localStorage.getItem('tab')+'')
    } 
  }, [])

  console.log(localStorage.getItem('tab')+'')

  const ClickHandler =(item: any)=>{  
    setTab(item)
  }

  return (
    <div style={color === 'dark' ? {backgroundColor: 'rgba(2, 4, 5, 0.7)', height: '80px'} : {backgroundColor: '#FFFFFF', height: '80px'}} className='w-full flex items-center px-12' >
      <div className='flex item-center' >
        <img onClick={()=> ClickHandler('')} src={Logo} alt='logo' className=' h-8 cursor-pointer' />
        <p className={props.color === 'dark' ? 'ml-4 font-CircularStd-Regular text-3xl text-white' : 'ml-4 font-CircularStd-Regular text-3xl'} >Everest</p>
      </div>
      <div className='mx-auto flex item-center mt-2' >
        {/* <Link to='/rider' > */}
          <p onClick={()=> ClickHandler('rider')} style={color === 'dark' ? {color: '#FFFFFF'}: {color: '#727272'}} className={tab === 'rider' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Rider</p>
          {/* </Link>  */}
        {/* <Link to='/driver'   > */}
          <p onClick={()=> ClickHandler('driver')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'driver' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Driver</p>
          {/* </Link> */}
        {/* <Link to='/faq'  > */}
          <p onClick={()=> ClickHandler('faq')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'faq' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >FAQ</p>
          {/* </Link> */}
        {/* <Link to='/subscription'  > */}
          <p onClick={()=> ClickHandler('subscription')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'subscription' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Subscription</p>
          {/* </Link> */}
        {/* // <Link to='/rider'  > */}
          <p onClick={()=> ClickHandler('rider')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === '' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >White paper</p>
          {/* // </Link> */}
      </div>
      <button style={color === 'dark' ? {backgroundColor: '#FFF', color: '#222222'} : {backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-36 text-sm h-12' >Buy $EVR</button>
    </div>
  )
}
