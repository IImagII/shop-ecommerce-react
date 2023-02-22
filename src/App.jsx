import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { items } from '../src/utils/data.js'
import { Item } from './components/Item'
import { OrdersContext } from './hooks/OrdersProvider'
import { Categories } from './components/Categories'
import { ShowFullItem } from './components/ShowFullItem'

function App() {
   const { orders, setOrders } = useContext(OrdersContext) // для добавления товаров в корзину
   const [currentItem, setCurrentItem] = useState(items) // сосотояние для управления категориями, vs c.lf pfgbitv yfib yfxfkmyst cjcnjybz
   const [showFullItems, setShowFullItems] = useState(false) // состояние для показа модального окна с индивидуальным товаром
   const [currentItemId, setCurrentItemId] = useState({}) // это состояние которое содержит всю инфу по индивидуальному товару
   const [showOrders, setShowOrders] = useState(false)

   //функция для добавления товаров корзину
   const addToOrders = item => {
      const isOrdersCartId = orders.some(el => el.id === item.id)

      if (isOrdersCartId) {
         setOrders(orders.filter(order => order.id !== item.id))
         setShowOrders(true)
      } else {
         setOrders([...orders, item])
         setShowOrders(false)
      }
   }

   //создадим функцию по фильтрации
   const chooseCategory = category => {
      //Так мы прописываем чтобы все категории можно было вернуть обратно все элементы на странице
      if (category === 'all') {
         return setCurrentItem(items)
      }
      setCurrentItem(items.filter(item => item.category === category))
   }

   //функция открытия модального окна с индивидуальным товаром
   const handleShowItenId = item => {
      setShowFullItems(showFullItems => !showFullItems) //меняем состояние на включить/выключить
      setCurrentItemId(item) //передаем конкретные даннеы для отображения конкретного состояния
   }

   return (
      <div className='wrapper'>
         <Header />
         <Categories chooseCategory={chooseCategory} />
         <main>
            {currentItem.map(item => {
               return (
                  <Item
                     {...item}
                     key={item.id}
                     handleShowItenId={handleShowItenId}
                     addToOrders={addToOrders}
                  />
               )
            })}
         </main>
         {/* Для отображения модального окна с товаромы */}
         <ShowFullItem
            showFullItems={showFullItems}
            currentItemId={currentItemId}
            setShowFullItems={setShowFullItems}
            addToOrders={addToOrders}
         />
         <Footer />
      </div>
   )
}

export default App
