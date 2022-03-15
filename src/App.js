import './App.css';
import React, { useState } from "react";
import ShoppingList from './ShoppingList';
import AddForm from './AddForm';
import shoppingData from "./shoppingData";

function App() {
  const [ items, setItems ] = useState([ ...shoppingData ]);

  return (
    <div className="App">
      <header className="container my-3 mx-auto">
        <h1 className="text-center">Shopping List</h1>
      </header>
      <div className="container my-3 mx-auto w-25">
        <AddForm />
        <ShoppingList items={items} />
      </div>
    </div>
  );
}

export default App;
