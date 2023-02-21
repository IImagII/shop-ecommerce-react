export const calcTotalPrice = orders => {
   return orders.reduce((acc, order) => (acc += +order.price), 0)
}
