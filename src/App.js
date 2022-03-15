import './App.css';
import React, { useState } from "react";
import ShoppingList from './ShoppingList';
import ShoppingAddForm from './ShoppingAddForm';
import shoppingData from "./shoppingData";

function App() {
  const [ items, setItems ] = useState([ ...shoppingData ]);
  function addItem(item) {
    setItems([ ...items, item ]);
  }

  function toggleItemComplete(targetIndex) {
    setItems(items.map((item, currentIndex) => 
      currentIndex === targetIndex ?
        ({ ...item, completed: !item.completed }) :
        item
    ));
  }

  function deleteItem(targetIndex) {
    setItems(items.filter((_item, index) => index !== targetIndex));
  }

  return (
    <div className="App">
      <header className="container my-3 mx-auto">
        <h1 className="text-center">Shopping List</h1>
      </header>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-md-8 col-lg-6">
            <ShoppingAddForm addItem={addItem} />
            <ShoppingList 
              items={items} 
              toggleItemComplete={toggleItemComplete} 
              deleteItem={deleteItem}
            />
          </div>
          <div className="col-md-2 col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
