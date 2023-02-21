import React from 'react'
import { Orders } from './Orders'
import { calcTotalPrice } from '../utils/calcTotalPrice'

export const OrderShow = ({ orders }) => {
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
                  <b> Итого:</b> {orders.length} товаров на сумму{' '}
                  {calcTotalPrice(orders)} грн.
               </span>
            </div>
         </div>
      </>
   )
}
