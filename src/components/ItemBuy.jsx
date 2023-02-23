import React from 'react'
import { Button } from './button'

export const ItemBuy = ({ addToOrders, item }) => {
   return (
      <>
         <Button type='primary' onClick={() => addToOrders(item)}>
            +
         </Button>
      </>
   )
}
