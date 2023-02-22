import React from 'react'

export const ItemBuy = ({ addToOrders, item }) => {
   return (
      <div className='add-to-cart' onClick={() => addToOrders(item)}>
         +
      </div>
   )
}
