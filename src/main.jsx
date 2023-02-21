import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { OrdersProvider } from './hooks/OrdersProvider'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
   <OrdersProvider>
      <App />
   </OrdersProvider>
)
