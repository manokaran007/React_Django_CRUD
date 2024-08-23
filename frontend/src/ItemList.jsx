import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/items/')
      .then(response => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);
  
  const addBook = async () => {
    const itemData = {
      name,
      description,
    };
    try {
      const response = await fetch("http://localhost:8000/items/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      const data = await response.json();
      setItems((prev) => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Items List</h1>
      <label htmlFor="name">Name:
      <input type="text" onChange={(e) => setName(e.target.value)} /></label>

      <label htmlFor="description">Description:
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button onClick={addBook}> Add Book </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
