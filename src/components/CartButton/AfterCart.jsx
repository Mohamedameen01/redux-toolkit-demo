import React from 'react'

function AfterCart({count}) {
  return (
    <div className='my-2 flex justify-center gap-2 transition-all ease-in-out delay-300'>
        <button className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>-</button>
        <p>{count}</p>
        <button className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>+</button>
    </div>
  )
}

export default AfterCart