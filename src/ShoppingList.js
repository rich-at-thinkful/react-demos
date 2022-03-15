import "./ShoppingList.css";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => <ShoppingItem key={index} index={index} item={item} />)}
    </ul>
  );
}