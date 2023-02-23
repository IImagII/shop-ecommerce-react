import React from 'react'
import { ItemBuy } from './ItemBuy'

export const Item = ({ ...item }) => {
   const { id, img, title, price, desc, addToOrders, showOrders } = item

   return (
      <div className='item'>
         <img src={img} alt='title' onClick={() => handleShowItenId(item)} />
         <h2>{title}</h2>
         <p>{desc}</p>
         <b>{price} ₴</b>
         <ItemBuy
            addToOrders={addToOrders}
            item={item}
            showOrders={showOrders}
         />
      </div>
   )
}
