import React from 'react'

export const Item = ({ ...item }) => {
   const { img, title, price, desc, addToOrders, handleShowItenId } = item

   return (
      <div className='item'>
         <img src={img} alt='title' onClick={() => handleShowItenId(item)} />
         <h2>{title}</h2>
         <p>{desc}</p>
         <b>{price} ₴</b>
         <div className='add-to-cart' onClick={() => addToOrders(item)}>
            +
         </div>
      </div>
   )
}
