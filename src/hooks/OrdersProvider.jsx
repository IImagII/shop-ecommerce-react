import { createContext, useState } from 'react'

export const OrdersContext = createContext()

export const OrdersProvider = ({ children }) => {
   const [orders, setOrders] = useState([]) // это те товары коотры едобавляются в корзину

   return (
      <OrdersContext.Provider value={{ orders, setOrders }}>
         {children}
      </OrdersContext.Provider>
   )
}
