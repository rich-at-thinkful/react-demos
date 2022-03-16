import { useContext } from "react";
import { ItemsContext } from "./Contexts";
import ShoppingBadge from "./ShoppingBadge";
import classNames from "classnames";

export default function ShoppingItem({ item, index }) {
  const { toggleItemComplete, deleteItem } = useContext(ItemsContext);
  const onClickToggle = () => toggleItemComplete(index);
  const onClickDelete = () => deleteItem(index);

  const completeClass = classNames({
    "btn-sm": true,
    "btn-info": !item.completed,
    "btn-secondary": item.completed,
  });

  return (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span>{item.name}</span>
      </div>
      <div className="d-flex align-items-center">
        <ShoppingBadge completed={item.completed} />
        <span className="ml-3">
          <button onClick={onClickToggle} className={completeClass}>
            { item.completed ? <span>--</span> :  <span>&#10003;</span> }
          </button>
        </span>
        <span className="ml-3">
          <button onClick={onClickDelete} className="btn-sm btn-danger">X</button>
        </span>
      </div>
    </li>
  );
}