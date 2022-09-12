import React from 'react';
import dataItem from './data/dataItem';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
function Content() {
  const [items, setItems] = useState(dataItem);
  const handleCheck = (id) => {
    const dataItemChange = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(dataItemChange);
    localStorage.setItem('shoppingList', JSON.stringify(dataItemChange));
  };
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label> {item.item}</label>
            <FaTrashAlt role='button' tabIndex='0' />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
