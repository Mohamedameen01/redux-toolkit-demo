import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function BeforeCart({product}) {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-center items-center transition-all ease-in-out duration-300'>
        <button onClick={() => dispatch(addToCart(product))} className='bg-pink-600 text-[whitesmoke] text-sm rounded-md p-2 cursor-pointer'>Add to cart</button>
    </div>
  )
}

export default BeforeCart