import React, { useState } from 'react'
import Testimonial from './Testimonial'
import { assets,testimonialsData } from '../assets/assets'

function Testimonials() {
    const [data,setData]= useState(testimonialsData)
  return (
    <div id='Testimonials' className='h-full md:h-screen w-full flex flex-col items-center justify-evenly gap-10 '>
      <div>
        <h1 className=' text-center capitalize text-4xl font-bold'>Customer <span className='font-light underline'>Testimonials</span></h1>
        <h1 className='text-center capitalize text-sm'>Real stories from those who found home <br />with us</h1>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 '>
        {
            data.map((item,ind)=>{
                return <Testimonial key={ind} testData={item}  />
            })
        }
      </div>
    </div>
  )
}

export default Testimonials
