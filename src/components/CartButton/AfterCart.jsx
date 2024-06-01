import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from '../../redux/cartSlice';

function AfterCart({count,productId}) {

  const dispatch = useDispatch();
  return (
    <div className='my-2 flex justify-center items-center gap-2 transition-all ease-in-out delay-300'>
        <button onClick={() => dispatch(decrementCount(productId))} className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(incrementCount(productId))} className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>+</button>
    </div>
  )
}

export default AfterCart