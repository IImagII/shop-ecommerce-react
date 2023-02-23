import React, { useContext } from 'react'

import { OrdersContext } from '../hooks/OrdersProvider'
import {
   BsFillArrowUpSquareFill,
   BsFillArrowDownSquareFill,
} from 'react-icons/bs'

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
               <h2>{title}</h2>
               <div>
                  <img src={img} alt='title' />
               </div>
               <div>
                  <b>Цена: {price} гривен</b>
               </div>
            </div>
            <div className='cart__count'>кол. 1</div>
            <div className='cart__arrow'>
               <BsFillArrowUpSquareFill />
               <BsFillArrowDownSquareFill />
            </div>
            <div className='cart__delete' onClick={() => handleRemoveOrder(id)}>
               удалить
            </div>
         </div>
      </>
   )
}
