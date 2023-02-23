import React, { useEffect, useState } from 'react'
import { Orders } from './Orders'

export const OrderShow = ({ orders }) => {
   //Состояние для изменения общей стоимости и количества корзины
   const [total, setTotal] = useState({
      totalPrice: new Intl.NumberFormat().format(
         orders.reduce((sum, order) => {
            return sum + +order.price
         }, 0)
      ),

      totalCount: new Intl.NumberFormat().format(
         orders.reduce((sum, order) => {
            return sum + +order.count
         }, 0)
      ),
   })

   //Длл изменения подсчета общего количестваи стоимости в корзине при изменении orders
   useEffect(() => {
      setTotal({
         totalPrice: new Intl.NumberFormat().format(
            orders.reduce((sum, order) => {
               return sum + +order.price * +order.count
            }, 0)
         ),

         totalCount: new Intl.NumberFormat().format(
            orders.reduce((sum, order) => {
               return sum + +order.count
            }, 0)
         ),
      })
   }, [orders])

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
                  <b>Итого:</b> {total.totalCount} товаров на сумму{' '}
                  {total.totalPrice} грн.
               </span>
            </div>
         </div>
      </>
   )
}
