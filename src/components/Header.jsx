import React, { useContext, useState } from 'react'
import { IoMdBasket } from 'react-icons/io'
import { Orders } from './Orders'
import { EmptyCart } from './EmptyCart'
import { calcTotalPrice } from '../utils/calcTotalPrice'
import { OrdersContext } from '../hooks/OrdersProvider'
import { OrderShow } from './OrderShow'

export const Header = () => {
   const [cartOpen, setCartOpen] = useState(false)
   const { orders } = useContext(OrdersContext) // берем из контекста

   //ждя сокращения кода и последующего его вывода

   return (
      <header>
         <div>
            <span className='logo'>House Staff</span>
            <IoMdBasket
               onClick={() => setCartOpen(cartOpen => !cartOpen)}
               className={`shop-cart-icon ${cartOpen && 'active'}`}
            />
            <nav>
               <ul className='nav'>
                  <li>Про нас</li>
                  <li>Контакты</li>
                  <li>Кабинет</li>
               </ul>
            </nav>
            {/* вывод товаров непосредсвтенно в блоке с корзиной */}
            {cartOpen && (
               <div className='shop-cart'>
                  {orders.length > 0 ? (
                     <OrderShow orders={orders} />
                  ) : (
                     <EmptyCart />
                  )}
               </div>
            )}
         </div>
         <div className='order-page__right'>
            <div className='order-page__total-price'>
               {orders.length > 0 && (
                  <span>
                     {orders.length} шт. {calcTotalPrice(orders)} грн.
                  </span>
               )}
            </div>
         </div>
         <div className='presentation'>
            <img src='@img' alt='' />
         </div>
      </header>
   )
}
