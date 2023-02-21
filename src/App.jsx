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
   console.log('showFullItems2222', showFullItems)
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
         {/* {showFullItems && (
            <ShowFullItem
               showFullItems={showFullItems}
               currentItemId={currentItemId}
               setShowFullItems={setShowFullItems}
            />
         )} */}

         <ShowFullItem
            showFullItems={showFullItems}
            currentItemId={currentItemId}
            setShowFullItems={setShowFullItems}
         />

         <Footer />
      </div>
   )
}

export default App
