import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { OrdersProvider } from './hooks/OrdersProvider'
import './index.scss'
import { CountProvider } from './hooks/countOrderProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
   <CountProvider>
      <OrdersProvider>
         <App />
      </OrdersProvider>
   </CountProvider>
)
