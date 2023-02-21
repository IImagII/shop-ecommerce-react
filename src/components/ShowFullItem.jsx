import React from 'react'

export const ShowFullItem = ({
   showFullItems,
   currentItemId,
   setShowFullItems,
}) => {
   const { img, desc, title, price } = currentItemId

   return (
      <div
         className={showFullItems ? 'modal modal_active' : 'modal'}
         //     className='modal'
         onClick={() => setShowFullItems(false)}
      >
         <div
            className={
               showFullItems
                  ? 'modal__content modal__content_active'
                  : 'modal__content'
            }
            onClick={e => e.stopPropagation()}
         >
            <div className='item'>
               <img
                  src={img}
                  alt='title'
                  onClick={() => handleShowItenId(item)}
               />
               <h2>{title}</h2>
               <p>{desc}</p>
               <b>{price} ₴</b>
               <div className='add-to-cart' onClick={() => addToOrders(item)}>
                  +
               </div>
            </div>{' '}
            */
         </div>
      </div>
   )
}
