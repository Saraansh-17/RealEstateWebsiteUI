import React, { useState } from 'react'

function Project({data}) {
    const {title,price,location,image} = data
  return (
    <div>
      <div className="h-[20rem] w-[15rem] md:h-[25rem] md:w-[18rem] mb-14 bg-zinc-500 relative">
        <img className='h-full w-full object-cover' src={image} alt="" />
        <div className="absolute h-10 w-40 md:h-13  md:w-42 left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-xl">
            <div className='flex flex-col pl-1 justify-start'>
                <h1 className='font-semibold text-sm md:text-base inline-block'>{title}</h1>
                <div className='flex md:gap-2 gap-1'>
                    <h1 className='text-xs inline-block'>{price}</h1>
                    <div className='border-r-2 border-black'></div>
                    <h1 className=' text-xs text-nowrap inline-block'>{location}</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
