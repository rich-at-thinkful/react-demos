import './App.css';
import React, { useState } from "react";
import ShoppingList from './ShoppingList';
import ShoppingAddForm from './ShoppingAddForm';
import shoppingData from "./shoppingData";
import { ItemsContext } from "./Contexts";

function App() {
  const [ items, setItems ] = useState([ ...shoppingData ]);

  function addItem(item) {
    setItems([ ...items, item ]);
  }

  function toggleItemComplete(targetIndex) {
    setItems(items.map((item, index) => 
      index === targetIndex ? 
        ({ ...item, completed: !item.completed }) :
        item     
    ));
  }

  function deleteItem(targetIndex) {
    setItems(items.filter((_item, index) => index !== targetIndex));
  }

  const itemsContextValue = {
    items,
    addItem,
    toggleItemComplete,
    deleteItem,
  };

  return (
    <ItemsContext.Provider value={itemsContextValue}>
      <div className="App">
        <header className="container my-3 mx-auto">
          <h1 className="text-center">Shopping List</h1>
        </header>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-2 col-lg-3"></div>
            <div className="col-md-8 col-lg-6">
              <ShoppingAddForm />
              <ShoppingList />
            </div>
            <div className="col-md-2 col-lg-3"></div>
          </div>
        </div>
      </div>
    </ItemsContext.Provider>

  );
}

export default App;
