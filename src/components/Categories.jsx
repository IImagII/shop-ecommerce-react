import React from 'react'

export const Categories = ({ chooseCategory }) => {
   const categories = [
      {
         key: 'all',
         name: 'Все',
      },
      {
         key: 'chairs',
         name: 'Стулья',
      },
      {
         key: 'tables',
         name: 'Столы',
      },
      {
         key: 'sofa',
         name: 'Диваны',
      },
      {
         key: 'light',
         name: 'Лампы',
      },
   ]
   return (
      <div className='categories'>
         {categories.map(categorie => (
            <div
               key={categorie.key}
               onClick={() => chooseCategory(categorie.key)}
            >
               {categorie.name}
            </div>
         ))}
      </div>
   )
}
