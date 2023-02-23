import React from 'react'
import './Button.module.scss'

export const Button = ({ onClick, type, children }) => {
   const btnClass = classNames({
      btn: true,
      'btn--primary': type === 'primary',
      'btn--danger': type === 'danger',
   })

   return (
      <button className={btnClass} onClick={onClick}>
         {children}
      </button>
   )
}
