import React from 'react'
import { assets } from '../assets/assets'

function Testimonial({testData}) {
    const {name,title,image,rating,text}=testData

  return (
    <div className='h-[15rem] w-[20rem] md:h-[25rem] md:w-[20rem] shadow-2xl mb-5'>
    <div className='flex flex-col items-center justify-center gap-2 px-8 md:gap-3 pt-5'>
      <div className='h-10 w-10 md:h-20 md:w-20 rounded-full'>
        <img className='h-full w-full object-cover' src={image} alt="" />
      </div>
      <div className=' h-16 w-full flex  flex-col justify-center'>
        <h1 className='text-center font-semibold text-sm md:text-base lg:text-xl '>{name}</h1>
        <h1 className='text-center font-light text-[0.6rem] md:text-sm lg:text-base  text-nowrap'>{title}</h1>
      </div>
      <div className='flex gap-0.5'>{
               Array.from({length: rating},(item,ind)=>(
                    <img className='' key={ind} src={assets.star_icon} alt= {rating} />
               ))
            }  
      </div>
      <div>
        <p className='text-xs md:text-sm text-center font-light'>
            {text}
        </p>
      </div>
      </div>
    </div>
  )
}

export default Testimonial
