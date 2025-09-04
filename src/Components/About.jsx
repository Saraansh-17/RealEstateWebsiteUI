import React, { useState } from 'react'
import Details from './Details'
import {assets} from '../assets/assets'

function About() {
    const items = [
        {
            num:10,
            Name:"Year of Excellence"
        },
        {
            num:12,
            Name:"Project Completed"
        },
        {
            num:20,
            Name:"Min. Sq. Ft. Delivered"
        },
        {
            num:25,
            Name:"Ongoing Projects"
        },
    ]
    const [data,setData] =useState(items)
  return (
    <div  className='about h-screen flex p-1 flex-col w-full'>
        <div className='p-5 md:p-10  text-center'>
            <h1 className='text-3xl font-semibold mb-2 capitalize'>About <span className='font-extralight underline'>Our Brand</span></h1>
            <h1 className='capitalize'>Passionate about properties, dedicated to <br/> your vision</h1>
        </div>
        <div className='h-[70%] w-full flex  flex-col items-center md:flex-row md:justify-center md:items-start md:gap-30'>
            <div className='about h-[45%] md:h-[90%]'>
                <img className='h-full' src={assets.brand_img} alt="" />
            </div>
            <div className='about mt-4 max-w-[65%] md:max-w-[35%] flex flex-col gap-7 md:gap-y-15 md:mt-8'>
                <div className=' md:mt-5 grid grid-cols-2 gap-x-13 gap-y-3 md:gap-5 text-center md:text-start  '>
                    {
                        data.map((obj,index)=>{ return <Details key={index} num={obj.num} Name={obj.Name} /> })
                    }
                </div>
                <div className='about'>
                    <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate, at voluptates impedit nostrum, nemo fugiat natus ea vero beatae iste consequatur odio sit id, ratione officia distinctio sed pariatur!</p>
                </div>
                <div>
                    <button className='text-xs md:text-base px-2 py-1 md:px-4 md:py-2 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-700'>Learn More</button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default About
