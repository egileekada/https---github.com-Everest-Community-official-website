import React from 'react' 
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default function Navbar (props: any) {

  const [tab, setTab] = React.useState(localStorage.getItem('tab')+'')
  // const [color, setColor] = React.useState('')
  const navigate = useNavigate();

  React.useEffect(() => {    
      localStorage.setItem('tab', tab)  
        localStorage.setItem('index', tab)
    if(tab !== ''){
      localStorage.setItem('color', 'dark') 
    }else { 
      localStorage.setItem('color', '') 
    } 

    if(tab === "faq"){
      localStorage.setItem('color', '') 
    }

    if(localStorage.getItem('tab')+'' === ''){ 
        navigate('/'+localStorage.getItem('tab')+'')  
    } else if(localStorage.getItem('tab')+'' === 'rider'){
        navigate('/'+localStorage.getItem('tab')+'')
    } else if(localStorage.getItem('tab')+'' === 'driver'){  
        navigate('/'+localStorage.getItem('tab')+'')
    } else if(localStorage.getItem('tab')+'' === 'faq'){  
      navigate('/'+localStorage.getItem('tab')+'') 
    } else if(localStorage.getItem('tab')+'' === 'subscription'){  
      navigate('/'+tab)
    }   
  }, [tab])

  React.useEffect(() => {
    if(localStorage.getItem('tab')){ 
      setTab(localStorage.getItem('tab')+'')
    }  
  }, []) 

  const ClickHandler =(item: any)=>{  
    setTab(item) 
  }

  return (
    <div
      style={
        localStorage.getItem("color") + "" === "dark"
          ? { backgroundColor: "rgba(2, 4, 5, 0.7)", height: "80px" }
          : { backgroundColor: "#FFFFFF", height: "80px" }
      }
      className="w-full flex items-center px-6 lg:px-12"
    >
      <div className="flex cursor-pointer item-center">
        <div
          style={{ boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.12)" }}
          className="fixed bottom-6 right-4 lg:hidden p-3 rounded-full bg-white"
        >
          <svg
            onClick={() => props.open()}
            className=""
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-[#1084FA]"
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            />
          </svg>
        </div>
        <img
          onClick={() => ClickHandler("")}
          src={Logo}
          alt="logo"
          className=" h-8 cursor-pointer "
        />
        <p
          onClick={() => ClickHandler("")}
          className={
            localStorage.getItem("color") + "" === "dark"
              ? "ml-4 lg:flex hidden font-CircularStd-Regular lg:text-3xl text-white text-xl"
              : "ml-4 lg:flex hidden font-CircularStd-Regular text-xl lg:text-3xl"
          }
        >
          Everest
        </p>
      </div>
      <div className="mx-auto hidden lg:flex item-center mt-2">
        {/* <Link to='/rider' > */}
        <p
          onClick={() => ClickHandler("rider")}
          style={
            localStorage.getItem("color") + "" === "dark"
              ? { color: "#FFFFFF" }
              : { color: "#727272" }
          }
          className={
            localStorage.getItem("tab") + "" === "rider"
              ? "font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 "
              : "font-CircularStd-Regular cursor-pointer mx-6 pb-2 "
          }
        >
          Rider
        </p>
        {/* </Link>  */}
        {/* <Link to='/driver'   > */}
        <p
          onClick={() => ClickHandler("driver")}
          style={
            localStorage.getItem("color") + "" === "dark"
              ? { color: "#FFFFFF" }
              : { color: "#727272" }
          }
          className={
            localStorage.getItem("tab") + "" === "driver"
              ? "font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 "
              : "font-CircularStd-Regular cursor-pointer mx-6 pb-2 "
          }
        >
          Driver
        </p>
        {/* </Link> */}
        {/* <Link to='/faq'  > */}
        <p
          onClick={() => ClickHandler("faq")}
          style={
            localStorage.getItem("color") + "" === "dark"
              ? { color: "#FFFFFF" }
              : { color: "#727272", borderColor: "#727272" }
          }
          className={
            localStorage.getItem("tab") + "" === "faq"
              ? "font-CircularStd-Regular border-b cursor-pointer mx-6 pb-2 "
              : "font-CircularStd-Regular cursor-pointer mx-6 pb-2 "
          }
        >
          FAQ
        </p>
        {/* </Link> */}
        {/* <Link to='/subscription'  > */}
        <p
          onClick={() => ClickHandler("subscription")}
          style={
            localStorage.getItem("color") + "" === "dark"
              ? { color: "#FFFFFF" }
              : { color: "#727272" }
          }
          className={
            localStorage.getItem("tab") + "" === "subscription"
              ? "font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 "
              : "font-CircularStd-Regular cursor-pointer mx-6 pb-2 "
          }
        >
          Subscription
        </p>
        {/* </Link> */}
        {/* // <Link to='/rider'  > */}
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => ClickHandler("rider")}
          style={
            localStorage.getItem("color") + "" === "dark"
              ? { color: "#FFFFFF" }
              : { color: "#727272" }
          }
          className={
            localStorage.getItem("tab") + "" === ""
              ? "font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 "
              : "font-CircularStd-Regular cursor-pointer mx-6 pb-2 "
          }
        >
          White paper
        </a>
        {/* // </Link> */}
      </div>
      <button
        style={
          localStorage.getItem("color") + "" === "dark"
            ? { backgroundColor: "#FFF", color: "#222222" }
            : { backgroundColor: "#0B85FD", color: "#FFF" }
        }
        className="rounded-xl w-auto px-5 lg:px-0 lg:w-36 text-sm ml-auto lg:ml-0 h-12"
      >
        Buy $EVR
      </button>
    </div>
  );
}
