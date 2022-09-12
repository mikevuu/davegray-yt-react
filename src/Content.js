import React from 'react';
import dataItem from './data/dataItem';
import { useState } from 'react';
function Content() {
  const [items, setItems] = useState(dataItem);
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type='checkbox' checked={item.checked} />
            <label> {item.item}</label>
            <button> Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content;
