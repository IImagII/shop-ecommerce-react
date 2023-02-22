import React, { useContext, useState } from 'react'
import { IoMdBasket } from 'react-icons/io'
import { Orders } from './Orders'
import { EmptyCart } from './EmptyCart'

import { OrdersContext } from '../hooks/OrdersProvider'
import { OrderShow } from './OrderShow'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

export const Header = () => {
   const [cartOpen, setCartOpen] = useState(false)
   const { orders } = useContext(OrdersContext) // берем из контекста
   const [touch, setTouch] = useState(false) //состояние для показа гамбурегр меню

   return (
      <header>
         <div className='header'>
            <div className='header__logo'>House Staff</div>

            {/* <IoMdBasket
               onClick={() => setCartOpen(cartOpen => !cartOpen)}
               className={`shop-cart-icon ${cartOpen && 'active'}`}
            /> */}

            <ul className={`nav ${touch && 'touch'}`}>
               <li>Про нас</li>
               <li>Контакты</li>
               <li>Кабинет</li>
            </ul>
            {/* Смена иконки при нажатии на бургер меню */}
            <div className={`menu`} onClick={() => setTouch(touch => !touch)}>
               {touch ? <GrClose size={25} /> : <FiMenu size={25} />}
            </div>

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
         {/* <div className='order-page__right'>
            <div className='order-page__total-price'>
               {orders.length > 0 && <span>{orders.length} шт. 6 грн.</span>}
            </div>
         </div>
         <div className='presentation'>
            <img src='@img' alt='' />
         </div> */}
      </header>
   )
}
