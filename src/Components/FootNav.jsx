import React from 'react'

function FootNav({data}) {
    const {Name, tag} = data
  return (
    <div className=''>
      <a className='text-xs md:text-sm font-semibold text-zinc-500 hover:text-zinc-300' href={tag}>{Name}</a>
    </div>
  )
}

export default FootNav
