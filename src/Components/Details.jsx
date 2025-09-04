import React from 'react'

function Details({num,Name}) {
  return (
    <div className=''>
      <h1 className='text-xl font-semibold md:text-3xl'>{num}+</h1>
      <h1 className='text-xs text-nowrap  md:text-sm'>{Name}</h1>
    </div>
  )
}

export default Details
