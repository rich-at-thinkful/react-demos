import ShoppingBadge from "./ShoppingBadge";
import classNames from "classnames";

export default function ShoppingItem({ item, index }) {
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
        <ShoppingBadge completed={item.completed} onClick={() => console.log("clicked completed")} />
        <span className="ml-3">
          <button onClick={() => console.log('complete')} className={completeClass}>&#10003;</button>
        </span>
        <span className="ml-3">
          <button onClick={() => console.log('del')} className="btn-sm btn-danger">X</button>
        </span>
      </div>
    </li>
  );
}