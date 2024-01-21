// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (itemName && quantity && price) {
      const newItem = {
        id: new Date().getTime(),
        name: itemName,
        quantity: parseInt(quantity, 10),
        price: parseFloat(price),
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setItemName('');
      setQuantity('');
      setPrice('');
    }
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <div className="inventory">
        <div className="form">
          <label>
            Item Name:
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </label>
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <div className="item-list">
          <h2>Inventory</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}</span>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

