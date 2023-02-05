import React,{ useState } from 'react'
import { useEffect } from 'react'
import logo from '../assets/login.png'

export const Loader = () => {
    
    const [loading, setLoading] = useState('0%')

    useEffect(()=>{
            setLoading('100%')
    },[])
  return (
    <div>
        <div className='flex justify-center align-center h-[100vh] w-[100vw]'>
        <div className='flex flex-col justify-center align-center gap-8'>
            <img src={logo} className='w-[20vw] h-[20vw] mx-auto ' alt="" />
            <div className='loader w-[30vw] '>
                <div className={`transition-width duration-[2000ms] ease bg-gradient-to-r from-[#C4E538] to-[#E1F19B] rounded h-[6px] drop-shadow-2xl`} style={{width:loading}}></div>
            </div>
            <h1 className='text-4xl font-bold'>Welcome to <span className='text-[#C4E538] text-5xl'>XRISPY</span></h1>
        </div>
    </div>
    </div>
  )
}


export default Loader;