import React, { useContext } from 'react'
import { Button } from './button'
import { OrdersContext } from '../hooks/OrdersProvider'

export const ItemBuy = ({ addToOrders, item }) => {
   const { orders } = useContext(OrdersContext) // для добавления товаров в корзину
   const isItemOrder = orders.some(orders => orders.id === item.id) // мы проверяем если есть этот элемент уже в корзине тогда делаем условие и меняем ему нопку

   return (
      <>
         <Button
            type={isItemOrder ? 'danger' : 'primary'}
            primary
            onClick={() => addToOrders(item)}
         >
            {isItemOrder ? 'Удалить' : 'В корзину'}
         </Button>
      </>
   )
}
