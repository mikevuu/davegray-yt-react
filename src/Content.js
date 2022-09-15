import React from 'react'

import ItemList from './ItemList'
function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length !== 0 ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p> Your list is empty</p>
      )}
    </main>
  )
}

export default Content
