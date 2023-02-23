import React, { useContext } from 'react'
import { OrdersContext } from '../hooks/OrdersProvider'
import {
   BsFillArrowUpSquareFill,
   BsFillArrowDownSquareFill,
} from 'react-icons/bs'

export const Orders = ({ ...order }) => {
   const { id, img, title, price, count } = order
   const { orders, setOrders } = useContext(OrdersContext) // берем из контекста

   //функция удаления товаров из корзины
   const handleRemoveOrder = id => {
      setOrders(orders.filter(order => order.id !== id))
   }

   //функция добавления большего количества товаров
   const handleIncreaseOrder = id => {
      setOrders(orders => {
         return orders.map(order => {
            if (order.id === id) {
               return {
                  ...order,
                  count: ++order.count,
               }
            }
            return order
         })
      })
   }

   //функция уменьшения количетсва в корзине
   const handleDecreaseOrder = id => {
      setOrders(orders => {
         return orders.map(order => {
            if (order.id === id) {
               return {
                  ...order,
                  count: order.count - 1 > 1 ? --order.count : 1,
               }
            }
            return order
         })
      })
   }

   return (
      <>
         <div className='cart'>
            <div className='cart__items'>
               <h2>{title}</h2>
               <div>
                  <img src={img} alt='title' />
               </div>
               <div>
                  <b>Стоимость: {+price * +count} гривен</b>
               </div>
            </div>
            <div className='cart__count'>кол. {count}</div>
            <div className='cart__arrow'>
               <BsFillArrowUpSquareFill
                  onClick={() => handleIncreaseOrder(id)}
               />
               <BsFillArrowDownSquareFill
                  onClick={() => handleDecreaseOrder(id)}
               />
            </div>
            <div className='cart__delete' onClick={() => handleRemoveOrder(id)}>
               удалить
            </div>
         </div>
      </>
   )
}
