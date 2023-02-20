import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { items } from '../src/utils/data.js'
import { Item } from './components/Item'

function App() {
   const [orders, setOrders] = useState([]) // для добавления товаров в корзину

   //функция для добавления товаров корзину
   const addToOrders = item => {
      let isArray = false //переменная для того чтобы не добавлять товар несоклько раз
      //условие благодаря которому не будет повторяться товарв корзине
      orders.forEach(elem => {
         if (elem.id === item.id) {
            isArray = true
         }
      })
      if (!isArray) {
         setOrders([...orders, item])
      }
   }

   return (
      <div className='wrapper'>
         <Header orders={orders} />
         <main>
            {items.map(item => {
               return <Item {...item} key={item.id} addToOrders={addToOrders} />
            })}
         </main>

         <Footer />
      </div>
   )
}

export default App
