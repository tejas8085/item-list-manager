import React, { useState } from "react";
import './App.css';

const ItemListManager = () => {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  // Handler for the Add Item button
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add the input value to the items array
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Item List Manager</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value as user types
          placeholder="Enter an item"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: "18px", marginBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
