import classNames from "classnames";

export default function ShoppingBadge({ completed, onClick }) {
  const badgeClass = classNames({
    badge: true,
    "badge-pill": true,
    "badge-success": completed,
    "badge-warning": !completed,
  });

  return (
    <span onClick={onClick} className={badgeClass}>
      { completed ? "completed" : "incomplete" }
    </span>
  );
}