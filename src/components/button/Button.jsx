import React from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(styles)

export const Button = ({ onClick, type, children }) => {
   const btnClass = cx(
      'btn',
      { danger: type === 'danger' },
      { primary: type === 'primary' }
   )

   return (
      <button className={cn(btnClass)} onClick={onClick}>
         {children}
      </button>
   )
}
