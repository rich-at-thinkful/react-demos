import classNames from "classnames";

export default function ShoppingBadge({ completed }) {
  const badgeClass = classNames({
    badge: true,
    "badge-pill": true,
    "badge-success": completed,
    "badge-warning": !completed,
  });

  return (
    <span className={badgeClass}>
      { completed ? "completed" : "incomplete" }
    </span>
  );
}