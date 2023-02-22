import React from 'react'
import { ItemBuy } from './ItemBuy'

export const Item = ({ ...item }) => {
   const {
      img,
      title,
      price,
      desc,
      addToOrders,
      handleShowItenId,
      isOrdersCart,
   } = item

   return (
      <div className='item'>
         <img src={img} alt='title' onClick={() => handleShowItenId(item)} />
         <h2>{title}</h2>
         <p>{desc}</p>
         <b>{price} ₴</b>
         <ItemBuy addToOrders={addToOrders} item={item} />
      </div>
   )
}
