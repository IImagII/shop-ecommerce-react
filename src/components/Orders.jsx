import React, { useContext } from 'react'
import { calcTotalPrice } from '../utils/calcTotalPrice.js'
import { OrdersContext } from '../hooks/OrdersProvider'

export const Orders = ({ ...order }) => {
   const { id, img, title, price } = order
   const { orders, setOrders } = useContext(OrdersContext) // берем из контекста

   //функция удаления товаров из корзины
   const handleRemoveOrder = id => {
      setOrders(orders.filter(order => order.id !== id))
   }
   return (
      <>
         <div className='cart'>
            <div className='cart__items'>
               <div>
                  <img src={img} alt='title' />
               </div>
               <div>
                  <h2>{title}</h2>
                  <b>{price} гривен</b>
               </div>
            </div>

            <div className='cart__delete' onClick={() => handleRemoveOrder(id)}>
               удалить
            </div>
         </div>
      </>
   )
}
