import React from 'react'
import { useCart } from '../context/Cart'

const ResetShoppingCart = () => {
    const cart = useCart();
  return (
    <div className='text-center m-2'>
        <button className='bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700' onClick={() => cart.setItem([])}> RESET CART </button>
    </div>
  )
}

export default ResetShoppingCart