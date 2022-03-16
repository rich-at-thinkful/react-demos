import { useContext } from "react";
import { ItemsContext } from "./Contexts";
import "./ShoppingList.css";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList() {
  const { items } = useContext(ItemsContext);
  
  return (
    <ul className="list-group">
      {items.map((item, index) => 
        <ShoppingItem 
          key={index} 
          index={index} 
          item={item} 
        />
      )}
    </ul>
  );
}