import React, { useState } from 'react'
import { assets } from '../assets/assets'
import FootNav from './FootNav'

function Footer() {
    const footNavData = [{
        Name: "Home",
        tag: "#Header",
    },{
        Name: "About us",
        tag: "#About",
    },{
        Name: "Contact Us",
        tag: "#ContactUs",
    },{
        Name: "Privacy Policy",
        tag: "#PP",
    },]

    const [data,setData] = useState(footNavData)
  return (
    <>
    <div className='bg-black text-white flex flex-col md:flex-row px-10 py-2  md:px-20 md:py-10 gap-5 md:gap-10'>
      <div className='md:w-[35%] p-1 '>
        <img src={assets.logo_dark} alt="" />
        <h1 className='text-xs md:text-sm text-gray-400 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente hic amet doloremque beatae possimus. Aspernatur harum pariatur cum eum.</h1>
      </div>
      <div className='md:w-[25%] p-1 '>
        <h1 className='font-semibold'>Company</h1>
        <div className='mt-1 md:mt-3 flex flex-col gap-0.3 md:gap-1'>
            {
                data.map((item, ind)=>{
                    return <FootNav data={item} />
                })
            }
        </div>
        
      </div>
      <div className='md:w-[35%] p-1 flex flex-col gap-2'>
        <h1>Subscribe to our newsletter</h1>
        <h1 className='text-xs md:text-sm text-zinc-400'>The latest news articles, and resources,<br />sent to your inbox weekly</h1>
        <div className='flex gap-2'>
            <input className='text-white px-1 py-1.5 md:px-3 md:py-2 outline-0 bg-zinc-800 text-xs md:text-sm ' type="text" placeholder='Enter your email' />
            <button className='px-2 py-1 md:px-4 md:py-2 bg-blue-400 hover:bg-blue-600 cursor-pointer text-white rounded text-xs md:text-sm'>Subscribe</button>
        </div>
      </div>
      
    </div>
    <div className='border-t border-zinc-700 bg-black text-zinc-500 px-5 py-2 pb-5 text-center text-xs md:text-sm'>
        Copyright 2025 &copy; GreatStack. All Right Reserverd
    </div>
    </>
  )
}

export default Footer
