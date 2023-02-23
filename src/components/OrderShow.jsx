import React from 'react'
import { Orders } from './Orders'

export const OrderShow = ({ orders, total }) => {
   const { totalCount, totalPrice } = total
   return (
      <>
         <div>
            {orders.map((order, index) => (
               <Orders key={index} {...order} />
            ))}
         </div>
         <div className='order-show'>
            <div className='order-show__page'>
               <span>
                  <b>Итого:</b> {totalCount} товаров на сумму {totalPrice} грн.
               </span>
            </div>
         </div>
      </>
   )
}
