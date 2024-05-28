import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../../redux/cartSlice';

function AfterCart() {
  const { cartCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='my-2 flex justify-center gap-2 transition-all ease-in-out delay-300'>
        <button onClick={() => dispatch(decrementCount())} className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>-</button>
        <p>{cartCount}</p>
        <button onClick={() => dispatch(incrementCount())} className='bg-pink-600 text-[whitesmoke] px-3 cursor-pointer rounded-lg'>+</button>
    </div>
  )
}

export default AfterCart