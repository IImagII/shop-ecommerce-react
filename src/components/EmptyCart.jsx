import React from 'react'
import { BsCartXFill } from 'react-icons/bs'

export const EmptyCart = () => {
   return (
      <div>
         <BsCartXFill className='empty-icon' />
         <b className='empty-text'>"Ваша корзина пуста"</b>
      </div>
   )
}
