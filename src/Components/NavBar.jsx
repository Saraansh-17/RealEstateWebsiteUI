import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

function NavBar() {
    const [showMenu,setShowMenu] = useState(false)
    const clickHandler1 = ()=>{
        setShowMenu(()=>!showMenu)
    }
    useEffect(()=>{
        if(showMenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='auto'
        }
    },[showMenu])
  return (
    <div  className='nav z-10 absolute top-0 left-0 w-full' >
        <div className=' nav mx-auto px-3 py-1.5 md:px-7 md:py-4 flex justify-between lg:justify-around items-center'>
            <div>
                <img src={assets.logo} alt="" />
            </div>
            <div className='nav hidden md:flex gap-7 lg:gap-13'>
                <a href="#Header" className='cursor-pointer text-white hover:text-gray-400  text-sm font-semibold'>Home</a>
                <a href="#About" className='cursor-pointer text-white hover:text-gray-400  text-sm font-semibold'>About</a>
                <a href="#Projects" className='cursor-pointer text-white hover:text-gray-400  text-sm font-semibold'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer text-white hover:text-gray-400  text-sm font-semibold'>Testiomonial</a>
            </div>
            <button className='nav hidden md:block px-6 py-2 bg-white text-black text-sm font-semibold rounded-full'>
                Sign Up
            </button>
            <img onClick={clickHandler1} className={` ${showMenu ? "h-0 w-0":"size-5"} md:hidden cursor-pointer`} src={assets.menu_icon} alt="" />
        </div>
        <div className={`md:hidden ${showMenu ? "fixed w-full" :"h-0 w-0" }  right-0 top-0 bottom-0 overflow-hidden bg-white/70 transition-all duration-150 ease-in-out `}>
        <div className='flex justify-end p-5'>
            <img onClick={clickHandler1} src={assets.cross_icon} className='size-4 cursor-pointer' alt="" />
        </div>
            <ul className='flex flex-col items-center mt-1 px-2 text-lg font-medium '>
                <a onClick={clickHandler1} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={clickHandler1} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={clickHandler1} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={clickHandler1} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
