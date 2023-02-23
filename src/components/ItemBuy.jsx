import React from 'react'
import { Button } from './button'

export const ItemBuy = ({ addToOrders, item }) => {
   return (
      <>
         <Button className={btn} onClick={() => addToOrders(item)}>
            {' '}
            +
         </Button>
         {/* <div className='add-to-cart' onClick={() => addToOrders(item)}></div> */}
      </>
   )
}
