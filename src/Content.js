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

  const handleDelete = (id) => {
    const dataItemChange = items.filter((item) => item.id !== id);
    setItems(dataItemChange);
    localStorage.setItem('shoppingList', JSON.stringify(dataItemChange));
  };
  return (
    <main>
      {items.length !== 0 ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex='0'
              />
            </li>
          ))}
        </ul>
      ) : (
        <p> Your list is empty</p>
      )}
    </main>
  );
}

export default Content;
