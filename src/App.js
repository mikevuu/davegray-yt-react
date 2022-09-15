import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import dataItem from './data/dataItem'
import { useState, useEffect, useRef } from 'react'
import AddItem from './AddItem'
function App() {
  const [items, setItems] = useState(dataItem)
  const handleCheck = (id) => {
    const dataItemChange = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(dataItemChange)
    localStorage.setItem('shoppingList', JSON.stringify(dataItemChange))
  }

  const handleDelete = (id) => {
    const dataItemChange = items.filter((item) => item.id !== id)
    setItems(dataItemChange)
    localStorage.setItem('shoppingList', JSON.stringify(dataItemChange))
  }
  return (
    <div className='App'>
      <Header />
      <AddItem />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
