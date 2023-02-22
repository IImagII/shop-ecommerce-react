export const calcTotalPrice = orders => {
   let summ = orders.reduce((acc, order) => (acc += +order.price), 0)
   return Number(summ).toFixed(2)
}
