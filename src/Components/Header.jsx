import React from 'react'
import NavBar from './NavBar'
import {assets} from '../assets/assets'

function Header() {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' style={{
        backgroundImage: `url(${assets.header_img})`}} id='Header'>
    <NavBar />
    <div className='flex head flex-col mx-auto gap-10 items-center'>
        <h1 className='text-3xl md:text-6xl text-white text-center font-semibold'>Explore Homes that<br/>fit your dreams</h1>
        <div className='head flex gap-12 md:gap-25 text-white'>
            <a href='#Project' className=' px-2 py-1 cursor-pointer text-sm hover:bg-white/20 hover:scale-105 ease-in-out transition-all duration-300 md:text-lg rounded-md bg-transparent border border-white'>Projects</a>
            <a href='#ContactUs' className=' px-2 py-1 cursor-pointer text-sm hover:bg-blue-800 md:text-lg rounded-md bg-blue-500 hover:scale-105 ease-in-out transition-all duration-300 '>Contact Us</a>
        </div>
    </div>
        
    </div>
  )
}

export default Header
