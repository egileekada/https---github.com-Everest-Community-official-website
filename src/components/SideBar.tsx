import React from 'react'
import { useNavigate } from 'react-router-dom'; 

export default function Menu(props: any) {
 
    const Array = [ 'Rider', 'Driver', 'FAQ', 'Subscription', 'White paper']  
    const navigate = useNavigate(); 
    const [tab, setTab] = React.useState(localStorage.getItem('index')+'') 

    React.useEffect(() => {
        localStorage.setItem('index', tab)
        localStorage.setItem('tab', tab.toLowerCase()) 
    },[tab]) 

    const ClickHandler =(index: any)=> { 
        if(index === 'Rider'){
            navigate('/rider') 
            setTab('rider')
        } else if(index === 'Driver'){
            navigate('/driver')
            setTab('driver')
        } else if(index === 'FAQ'){
            navigate('/faq')
            setTab('faq')
        } else if(index === 'Subscription'){
            navigate('/subscription')
            setTab('subscription')
        }else{ 
            setTab(index) 
            navigate('/')
        }
        props.close();
    }   

    return (
        <div className='w-full h-screen pt-8 flex flex-col bg-[#F4F4F4] items-center overflow-y-auto' > 
            <div className='w-full flex pt-4 pb-8' >
                <div className='w-full flex flex-1' />
                <div onClick={()=> props.close()} style={{boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.12)'}} className='p-3 rounded-full bg-white mr-6' > 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L1 15M1 1L8 8L1 1ZM8 8L15 15L8 8ZM8 8L15 1L8 8Z" stroke="#0B85FD" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
            </div> 
            <div className='w-full mt-6' >
                {Array.map((item: any, index: any) => {
                    return( 
                        <div key={index} className='w-full px-3' > 
                            <div onClick={()=> ClickHandler(item)} style={item.toLowerCase() === localStorage.getItem('index')+'' ? {backgroundColor: '#1084FA'} : {color: '#222222'}} className='w-full cursor-pointer py-4 px-6 rounded-md' > 
                                <div className='w-full h-full flex flex-row items-center ' >  
                                    <p style={item.toLowerCase() === localStorage.getItem('index')+'' ? {color: '#FFF'} : {color: '#222222'}} className=' font-CircularStd-Medium lg:text-sm' >{item}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}

