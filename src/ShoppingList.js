import "./ShoppingList.css";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items, toggleItemComplete, deleteItem }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => 
        <ShoppingItem 
          key={index} 
          index={index} 
          item={item} 
          onToggleClick={() => toggleItemComplete(index)}
          onDeleteClick={() => deleteItem(index)}
        />
      )}
    </ul>
  );
}