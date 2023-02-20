import React from 'react'

export const Orders = ({ ...order }) => {
   const { img, title, price } = order

   return (
      <div className='cart'>
         <div className='cart__items'>
            <img src={img} alt='title' />
            <h2>{title}</h2>
            <b>{price} ₴</b>
         </div>
      </div>
   )
}
