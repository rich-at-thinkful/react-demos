import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul className="nav nav-pills my-3">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Homepage</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/settings" className="nav-link">Settings</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/users" className="nav-link">User Profiles</NavLink>
      </li>
    </ul>
  )
}