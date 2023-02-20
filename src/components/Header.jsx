import React, { useState } from 'react'
import { IoMdBasket } from 'react-icons/io'
import { Orders } from './Orders'
import { EmptyCart } from './EmptyCart'

export const Header = ({ orders }) => {
   const [cartOpen, setCartOpen] = useState(false)
   const cart = orders.map((order, index) => <Orders key={index} {...order} />)

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
                  {orders.length > 0 ? cart : <EmptyCart />}
               </div>
            )}
         </div>
         <div className='presentation'>
            <img src='@img' alt='' />
         </div>
      </header>
   )
}
